//const to_b58 = function(B:any,A:any){var d:any=[],s:any="",i:any,j:any,c:any,n:any;for(i in B){j=0,c=B[i];s+=c||s.length^i?"":1;while(j in d||c){n=d[j];n=n?n*256+c:c;c=n/58|0;d[j]=n%58;j++}}while(j--)s+=A[d[j]];return s};
//const from_b58 = function(S:any,A:any):any{var d:any=[],b:any=[],i:any,j:any,c:any,n:any;for(i in S){j=0,c=A.indexOf(S[i]);if(c<0)return undefined;c||b.length^i?i:b.push(0);while(j in d||c){n=d[j];n=n?n*58+c:c;c=n>>8;d[j]=n%256;j++}}while(j--)b.push(d[j]);return new Uint8Array(b)};
//export const compress_into_base_58 = function(msg:string) {
//  const buffer = new TextEncoder().encode(msg);
//  return to_b58(new Uint8Array(buffer), '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
//};
//export const decompress_from_base_58 = function(coded_string:string) {
//  const buffer = from_b58(coded_string, '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').buffer;
//  const decoder = new TextDecoder();
//  return decoder.decode(buffer);
//};

const to_b58 = function(B,A){var d=[],s="",i,j,c,n;for(i in B){j=0,c=B[i];s+=c||s.length^i?"":1;while(j in d||c){n=d[j];n=n?n*256+c:c;c=n/58|0;d[j]=n%58;j++}}while(j--)s+=A[d[j]];return s};
const from_b58 = function(S,A){var d=[],b=[],i,j,c,n;for(i in S){j=0,c=A.indexOf(S[i]);if(c<0)return undefined;c||b.length^i?i:b.push(0);while(j in d||c){n=d[j];n=n?n*58+c:c;c=n>>8;d[j]=n%256;j++}}while(j--)b.push(d[j]);return new Uint8Array(b)};
const compress_into_base_58 = function(msg) {
  const buffer = new TextEncoder().encode(msg);
  return to_b58(new Uint8Array(buffer), '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
};
const decompress_from_base_58 = function(coded_string) {
  const buffer = from_b58(coded_string, '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').buffer;
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
};

const print = (json) => {
  console.log(JSON.stringify(json));
  console.log(compress_into_base_58(JSON.stringify(json)));
};

print([
  'aF9HeXg65AE',
  957,
  969 + 152,
]);
print([
  'Cn_lucBscH4',
  3414,
  3454,
]);
print([
  'x2GbfU-kkTs',
  9209,
  10196,
]);
