const transcript_for_testing = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": null,
        "device_id": 1,
        "timestamp": 3173.1000003814697
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 3459.7000007629395
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 3460.2000007629395
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 1,
        "timestamp": 3661.1000003814697
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 3662
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": []
        },
        "ephemeral_data": {
            "clock": 0,
            "causal_tree": []
        },
        "timestamp": 3662.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 3663.300000190735
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 3663.6000003814697
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 3664.2000007629395
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 3894.800000190735
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 3895.300000190735
    },
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": null,
        "device_id": 0,
        "timestamp": 4171.800000190735
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4446.900000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4447.5
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 4660.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4661.60000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": []
        },
        "ephemeral_data": {
            "clock": 0,
            "causal_tree": []
        },
        "timestamp": 4662.400000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4664
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4664.300000190735
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 4665
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4857.199999809265
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4857.5
    },
    {
        "type": "beforeinput",
        "value": "",
        "selection_start": 0,
        "selection_end": 0,
        "input_type": "insertText",
        "timestamp": 16016.5
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "",
            "selection_start": 0,
            "selection_end": 0,
            "input_type": "insertText"
        },
        "output": {
            "start": 0,
            "end": 0
        },
        "timestamp": 16016.699999809265
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "",
            "removed": "",
            "inserted": "A",
            "index": 0,
            "new_value": "A"
        },
        "device_id": 0,
        "timestamp": 16017.60000038147
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                }
            ]
        },
        "change": {
            "prev_value": "",
            "removed": "",
            "inserted": "A",
            "index": 0,
            "new_value": "A"
        },
        "ephemeral_data": {
            "clock": 0,
            "causal_tree": []
        },
        "self_device_id": 0,
        "timestamp": 16017.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671271729
            }
        ],
        "timestamp": 16018.10000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                }
            ]
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                }
            ]
        },
        "timestamp": 16018.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            }
        ],
        "timestamp": 16019.199999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671271729
            }
        ],
        "timestamp": 16019.400000572205
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000A",
        "timestamp": 16020
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                }
            ]
        },
        "device_id": 1,
        "timestamp": 17385.70000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            }
        ],
        "timestamp": 17386.300000190735
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                }
            ]
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                }
            ]
        },
        "timestamp": 17386.70000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            }
        ],
        "timestamp": 17387.60000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            }
        ],
        "timestamp": 17388
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000A",
        "timestamp": 17388.400000572205
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 2
        },
        "device_id": 0,
        "timestamp": 18687.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671271729
            }
        ],
        "timestamp": 18687.60000038147
    },
    {
        "type": "beforeinput",
        "value": "A",
        "selection_start": 1,
        "selection_end": 1,
        "input_type": "insertText",
        "timestamp": 21412.199999809265
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "A",
            "selection_start": 1,
            "selection_end": 1,
            "input_type": "insertText"
        },
        "output": {
            "start": 1,
            "end": 1
        },
        "timestamp": 21412.199999809265
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "B",
            "index": 1,
            "new_value": "AB"
        },
        "device_id": 0,
        "timestamp": 21412.800000190735
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                }
            ]
        },
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "B",
            "index": 1,
            "new_value": "AB"
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 21412.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            }
        ],
        "timestamp": 21413.10000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                }
            ]
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                }
            ]
        },
        "timestamp": 21413.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754671275000
            }
        ],
        "timestamp": 21413.699999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            }
        ],
        "timestamp": 21414.10000038147
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000ATa\u0002\u0000B",
        "timestamp": 21414.5
    },
    {
        "type": "beforeinput",
        "value": "AB",
        "selection_start": 2,
        "selection_end": 2,
        "input_type": "insertText",
        "timestamp": 22248.10000038147
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "AB",
            "selection_start": 2,
            "selection_end": 2,
            "input_type": "insertText"
        },
        "output": {
            "start": 2,
            "end": 2
        },
        "timestamp": 22248.199999809265
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "AB",
            "removed": "",
            "inserted": "C",
            "index": 2,
            "new_value": "ABC"
        },
        "device_id": 0,
        "timestamp": 22248.60000038147
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                }
            ]
        },
        "change": {
            "prev_value": "AB",
            "removed": "",
            "inserted": "C",
            "index": 2,
            "new_value": "ABC"
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 22248.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            }
        ],
        "timestamp": 22249.10000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "timestamp": 22249.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754671275000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754671275000
            }
        ],
        "timestamp": 22249.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            }
        ],
        "timestamp": 22250.199999809265
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 22250.699999809265
    },
    {
        "type": "beforeinput",
        "value": "ABC",
        "selection_start": 1,
        "selection_end": 1,
        "input_type": "deleteContentBackward",
        "timestamp": 23266.400000572205
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "ABC",
            "selection_start": 1,
            "selection_end": 1,
            "input_type": "deleteContentBackward"
        },
        "output": {
            "start": 0,
            "end": 1
        },
        "timestamp": 23266.400000572205
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "ABC",
            "removed": "A",
            "inserted": "",
            "index": 0,
            "new_value": "BC"
        },
        "device_id": 0,
        "timestamp": 23267.300000190735
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "change": {
            "prev_value": "ABC",
            "removed": "A",
            "inserted": "",
            "index": 0,
            "new_value": "BC"
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 23267.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671278978
            }
        ],
        "timestamp": 23267.699999809265
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671278978
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671278978
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "timestamp": 23268
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754671275000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754671275000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754671275000
            }
        ],
        "timestamp": 23268.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671278978
            }
        ],
        "timestamp": 23268.699999809265
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 23269.400000572205
    },
    {
        "type": "beforeinput",
        "value": "A",
        "selection_start": 1,
        "selection_end": 1,
        "input_type": "insertText",
        "timestamp": 23567
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "A",
            "selection_start": 1,
            "selection_end": 1,
            "input_type": "insertText"
        },
        "output": {
            "start": 1,
            "end": 1
        },
        "timestamp": 23567
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "D",
            "index": 1,
            "new_value": "AD"
        },
        "device_id": 1,
        "timestamp": 23567.900000572205
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                }
            ]
        },
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "D",
            "index": 1,
            "new_value": "AD"
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 23568.20000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            }
        ],
        "timestamp": 23568.800000190735
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 5,
                    "c": "D"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                }
            ]
        },
        "ephemeral_data": {
            "clock": 5,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                }
            ]
        },
        "timestamp": 23569.20000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754671280000
            }
        ],
        "timestamp": 23569.70000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            }
        ],
        "timestamp": 23570
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000Ata\u0003\u0000D",
        "timestamp": 23570.60000038147
    },
    {
        "type": "beforeinput",
        "value": "AD",
        "selection_start": 2,
        "selection_end": 2,
        "input_type": "insertText",
        "timestamp": 23828.5
    },
    {
        "type": "output",
        "call_record": {
            "type": "beforeinput",
            "value": "AD",
            "selection_start": 2,
            "selection_end": 2,
            "input_type": "insertText"
        },
        "output": {
            "start": 2,
            "end": 2
        },
        "timestamp": 23828.5
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "AD",
            "removed": "",
            "inserted": "E",
            "index": 2,
            "new_value": "ADE"
        },
        "device_id": 1,
        "timestamp": 23829.300000190735
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 5,
                    "c": "D"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                }
            ]
        },
        "change": {
            "prev_value": "AD",
            "removed": "",
            "inserted": "E",
            "index": 2,
            "new_value": "ADE"
        },
        "ephemeral_data": {
            "clock": 5,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 23829.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671280528
            }
        ],
        "timestamp": 23829.70000076294
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 5,
                    "c": "D"
                },
                {
                    "id": 7,
                    "c": "E"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                }
            ]
        },
        "ephemeral_data": {
            "clock": 7,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                }
            ]
        },
        "timestamp": 23830.10000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754671280000
            }
        ],
        "timestamp": 23830.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671280528
            }
        ],
        "timestamp": 23831.400000572205
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000Ata\u0003\u0000Da\u0002\u0000E",
        "timestamp": 23832
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671278978
                }
            ]
        },
        "device_id": 1,
        "timestamp": 24429.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671280528
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671281128
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671281128
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671281128
            }
        ],
        "timestamp": 24430.300000190735
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 5,
                    "c": "D"
                },
                {
                    "id": 7,
                    "c": "E"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671281128
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671281128
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671281128
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671274084
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671281128
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671281128
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671281128
                }
            ]
        },
        "timestamp": 24431.10000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754671280000
            }
        ],
        "timestamp": 24432
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671280528
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671281128
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671281128
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671281128
            }
        ],
        "timestamp": 24432.5
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000Ata\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 24433.10000038147
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 7
        },
        "device_id": 1,
        "timestamp": 24674
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754671274084
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671280267
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671280528
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671281128
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671281128
            }
        ],
        "timestamp": 24674.20000076294
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                }
            ]
        },
        "device_id": 0,
        "timestamp": 25412.199999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671278978
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671281124
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671281124
            }
        ],
        "timestamp": 25412.800000190735
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 5,
                    "c": "D"
                },
                {
                    "id": 7,
                    "c": "E"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÔla\u0002\u0000A",
                        "time": 1754671270000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754671271729
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671278978
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671281124
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671281124
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754671271729
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754671278978
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671281124
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671281124
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754671277124
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754671277960
                }
            ]
        },
        "timestamp": 25413.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754671270000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754671275000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754671280000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754671275000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754671275000
            }
        ],
        "timestamp": 25413.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671278978
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671281124
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671281124
            }
        ],
        "timestamp": 25414.10000038147
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÔla\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002ATaDa\u0002\u0000E",
        "timestamp": 25414.60000038147
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 8
        },
        "device_id": 0,
        "timestamp": 25661
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÔla\u0002\u0000A",
                    "time": 1754671270000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754671271729
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754671277124
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754671277960
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754671278978
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754671281124
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754671281124
            }
        ],
        "timestamp": 25661.300000190735
    }
];

const transcript_2 = [
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4447
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4448.5
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 4660.900000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4661.800000190735
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": []
        },
        "ephemeral_data": {
            "clock": 0,
            "causal_tree": []
        },
        "timestamp": 4662.400000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4663.200000762939
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4663.60000038147
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 4664.400000572205
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4858.200000762939
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4858.400000572205
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "",
            "removed": "",
            "inserted": "A",
            "index": 0,
            "new_value": "A"
        },
        "device_id": 0,
        "timestamp": 16018.20000076294
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                }
            ]
        },
        "change": {
            "prev_value": "",
            "removed": "",
            "inserted": "A",
            "index": 0,
            "new_value": "A"
        },
        "ephemeral_data": {
            "clock": 0,
            "causal_tree": []
        },
        "self_device_id": 0,
        "timestamp": 16018.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754673194938
            }
        ],
        "timestamp": 16018.60000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "",
                        "time": 0,
                        "baseline": 0
                    },
                    "final_state": {
                        "state_1": {
                            "current": []
                        },
                        "state_2": {
                            "clock": 0,
                            "causal_tree": []
                        }
                    },
                    "id": 0
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                }
            ]
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                }
            ]
        },
        "timestamp": 16019
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754673190000
            }
        ],
        "timestamp": 16019.70000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754673194938
            }
        ],
        "timestamp": 16020
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÕìa\u0002\u0000A",
        "timestamp": 16020.400000572205
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 2
        },
        "device_id": 0,
        "timestamp": 18688.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "",
                    "time": 0,
                    "baseline": 0
                },
                "final_state": {
                    "state_1": {
                        "current": []
                    },
                    "state_2": {
                        "clock": 0,
                        "causal_tree": []
                    }
                },
                "id": 0
            },
            {
                "type": "add",
                "text": "A",
                "id": 2,
                "id_to_left": 0,
                "timestamp": 1754673194938
            }
        ],
        "timestamp": 18688.60000038147
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "B",
            "index": 1,
            "new_value": "AB"
        },
        "device_id": 0,
        "timestamp": 21413.10000038147
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                }
            ]
        },
        "change": {
            "prev_value": "A",
            "removed": "",
            "inserted": "B",
            "index": 1,
            "new_value": "AB"
        },
        "ephemeral_data": {
            "clock": 2,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 21413.20000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            }
        ],
        "timestamp": 21413.400000572205
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                }
            ]
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                }
            ]
        },
        "timestamp": 21413.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754673190000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754673200000
            }
        ],
        "timestamp": 21414.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            }
        ],
        "timestamp": 21414.70000076294
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÕìa\u0002\u0000Ata\u0002\u0000B",
        "timestamp": 21415.20000076294
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "AB",
            "removed": "",
            "inserted": "C",
            "index": 2,
            "new_value": "ABC"
        },
        "device_id": 0,
        "timestamp": 22249.20000076294
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                }
            ]
        },
        "change": {
            "prev_value": "AB",
            "removed": "",
            "inserted": "C",
            "index": 2,
            "new_value": "ABC"
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 22249.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            }
        ],
        "timestamp": 22249.60000038147
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "timestamp": 22249.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754673190000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754673200000
            }
        ],
        "timestamp": 22250.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            }
        ],
        "timestamp": 22250.60000038147
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÕìa\u0002\u0000Ata\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 22251.10000038147
    },
    {
        "type": "on_change",
        "change": {
            "prev_value": "ABC",
            "removed": "A",
            "inserted": "",
            "index": 0,
            "new_value": "BC"
        },
        "device_id": 0,
        "timestamp": 23269.10000038147
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 2,
                    "c": "A"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "change": {
            "prev_value": "ABC",
            "removed": "A",
            "inserted": "",
            "index": 0,
            "new_value": "BC"
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 23269.20000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754673202189
            }
        ],
        "timestamp": 23269.5
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754673202189
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754673202189
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "timestamp": 23269.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754673190000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754673200000
            }
        ],
        "timestamp": 23270.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754673202189
            }
        ],
        "timestamp": 23270.70000076294
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÕìa\u0002\u0000Ata\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 23271.20000076294
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754671280267
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754671280528
                }
            ]
        },
        "device_id": 0,
        "timestamp": 25412.300000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754673202189
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754673204333
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754673204333
            }
        ],
        "timestamp": 25413
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 5,
                    "c": "D"
                },
                {
                    "id": 7,
                    "c": "E"
                },
                {
                    "id": 4,
                    "c": "B"
                },
                {
                    "id": 6,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êÕìa\u0002\u0000A",
                        "time": 1754673190000,
                        "baseline": 2
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 2,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 2,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 2,
                                    "id_to_left": 0,
                                    "timestamp": 1754673194938
                                }
                            ]
                        }
                    },
                    "id": 2
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754673202189
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754673204333
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754673204333
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 2,
                    "id_to_left": 0,
                    "timestamp": 1754673194938
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754673202189
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754673204333
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754673204333
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754673200333
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754673201169
                }
            ]
        },
        "timestamp": 25413.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754673190000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754673200000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754673200000
            }
        ],
        "timestamp": 25413.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754673202189
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754673204333
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754673204333
            }
        ],
        "timestamp": 25414.20000076294
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êÕìa\u0002\u0000Ata\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 25414.70000076294
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 8
        },
        "device_id": 0,
        "timestamp": 25660.60000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êÕìa\u0002\u0000A",
                    "time": 1754673190000,
                    "baseline": 2
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 2,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 2,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 2,
                                "id_to_left": 0,
                                "timestamp": 1754673194938
                            }
                        ]
                    }
                },
                "id": 2
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754673200333
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754673201169
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754673202189
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754673204333
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754673204333
            }
        ],
        "timestamp": 25660.70000076294
    }
];
