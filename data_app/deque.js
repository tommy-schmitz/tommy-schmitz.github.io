// Approximation of √(x+y) = √x + y / (2√x)
// Error is less than 10% when 0.6x < y < 1.4x

class Deque {
  constructor(chunkSize = 256) {
    this.chunkSize = chunkSize;
    this.chunks = [];
    this.length = 0;
  }

  splice(start, deleteCount, ...items) {
    const result = [];
    for(let i = 0; i < deleteCount; i++)
      result.push(this.get(start + i));
    for(let i = deleteCount - 1; i >= 0; i--)
      this._deleteAt(start + i);
    for(let i = 0; i < items.length; i++)
      this._insertAt(start + i, items[i]);
    return result;
  }

  get(index) {
    for (const chunk of this.chunks) {
      if (index < chunk.length) return chunk[index];
      index -= chunk.length;
    }
  }

  slice(start = 0, end = this.length) {
    const result = [];
    let index = 0;

    for(const chunk of this.chunks) {
      const chunkEnd = index + chunk.length;
      if(index < end  &&  chunkEnd > start) {
        const sliceStart = Math.max(0, start - index);
        const sliceEnd = Math.min(chunk.length, end - index);
        result.push(...chunk.slice(sliceStart, sliceEnd));
      }
      index = chunkEnd;
      if(index >= end)
        break;
    }

    return result;
  }

  _deleteAt(index) {
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      if (index < chunk.length) {
        chunk.splice(index, 1);
        this.length--;
        if (chunk.length === 0) this.chunks.splice(i, 1);
        return;
      }
      index -= chunk.length;
    }
  }

  _insertAt(index, value) {
    for (let i = 0; i <= this.chunks.length; i++) {
      if (i === this.chunks.length || index <= this.chunks[i].length) {
        const chunk = this.chunks[i] || [];
        chunk.splice(index, 0, value);
        if (chunk.length > this.chunkSize) {
          const mid = chunk.length >> 1;
          this.chunks.splice(i + 1, 0, chunk.splice(mid));
        }
        this.chunks[i] = chunk;
        this.length++;
        return;
      }
      index -= this.chunks[i].length;
    }
  }

  static _fromArray(arr) {
    const deque = new Deque();
    deque.chunks = [];
    for(let i=0; i<arr.length; i+=deque.chunkSize)
      deque.chunks.push(arr.slice(i, i + deque.chunkSize));
  }

  * [Symbol.iterator]() {
    for (const chunk of this.chunks) {
      for (const item of chunk) {
        yield item;
      }
    }
  }
}
