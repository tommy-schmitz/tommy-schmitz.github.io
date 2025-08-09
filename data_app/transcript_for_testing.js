const transcript_for_testing = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "device_id": 0,
        "timestamp": 1754714770282
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 4
        },
        "device_id": 0,
        "timestamp": 1754714770459
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770460
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 1754714770634
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770635
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714770636
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770637
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770637
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "timestamp": 1754714770639
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 1754714770814
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754714770814
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
        "timestamp": 1754714773014
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
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
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
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754714773014
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754714773014
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                }
            ]
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714773014
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714773015
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754714773015
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
        "timestamp": 1754714773016
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 6
        },
        "device_id": 0,
        "timestamp": 1754714777653
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754714777653
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
        "timestamp": 1754714779047
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
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
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754714779048
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754714779048
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "timestamp": 1754714779048
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714779049
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754714779049
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000B",
        "timestamp": 1754714779050
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
        "timestamp": 1754714779780
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
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
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754714779780
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754714779780
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "ephemeral_data": {
            "clock": 10,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754714779781
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714779781
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754714779782
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 1754714779782
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
        "timestamp": 1754714781014
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
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
            "clock": 10,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754714781014
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            }
        ],
        "timestamp": 1754714781014
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                }
            ]
        },
        "ephemeral_data": {
            "clock": 12,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754714781014
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 12,
                "deleted_id": 6,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714781015
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            }
        ],
        "timestamp": 1754714781015
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 1754714781015
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                }
            ]
        },
        "device_id": 0,
        "timestamp": 1754714784465
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000500
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754714784465
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 9,
                    "c": "D"
                },
                {
                    "id": 11,
                    "c": "E"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000500
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000600
                }
            ]
        },
        "ephemeral_data": {
            "clock": 12,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000500
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000600
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754714784466
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 12,
                "deleted_id": 6,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 9,
                "id_to_left": 6,
                "text": "D",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 11,
                "id_to_left": 9,
                "text": "E",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714784467
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000500
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754714784467
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 1754714784468
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 12
        },
        "device_id": 0,
        "timestamp": 1754714784651
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000500
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754714784651
    }
];

const transcript_1_device_1 = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "device_id": 1,
        "timestamp": 1754714770276
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 1754714770456
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770456
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 1,
        "timestamp": 1754714770636
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770637
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714770638
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770640
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714770640
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "timestamp": 1754714770641
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 1754714770811
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754714770812
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                }
            ]
        },
        "device_id": 1,
        "timestamp": 1754714777474
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754714777474
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                }
            ]
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714777475
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714777475
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754714777476
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
        "timestamp": 1754714777476
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
        "timestamp": 1754714783811
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
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
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 1754714783812
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754714783812
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 9,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "ephemeral_data": {
            "clock": 9,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714783812
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 9,
                "id_to_left": 6,
                "text": "D",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714783813
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754714783813
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0003\u0000D",
        "timestamp": 1754714783814
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
        "timestamp": 1754714783885
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 9,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
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
            "clock": 9,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 1754714783885
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754714783886
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 9,
                    "c": "D"
                },
                {
                    "id": 11,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                }
            ]
        },
        "ephemeral_data": {
            "clock": 11,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714783887
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 9,
                "id_to_left": 6,
                "text": "D",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 11,
                "id_to_left": 9,
                "text": "E",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714783887
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754714783888
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0003\u0000Da\u0002\u0000E",
        "timestamp": 1754714783889
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                }
            ]
        },
        "device_id": 1,
        "timestamp": 1754714784466
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000300
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000500
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754714784472
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 9,
                    "c": "D"
                },
                {
                    "id": 11,
                    "c": "E"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000500
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000600
                }
            ]
        },
        "ephemeral_data": {
            "clock": 12,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000600
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000500
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754714784473
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 12,
                "deleted_id": 6,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 9,
                "id_to_left": 6,
                "text": "D",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 11,
                "id_to_left": 9,
                "text": "E",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754714784476
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000300
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000500
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754714784477
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 1754714784478
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 11
        },
        "device_id": 1,
        "timestamp": 1754714784635
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000300
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000500
            }
        ],
        "timestamp": 1754714784635
    }
];

const transcript_2 = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "device_id": 0,
        "timestamp": 1754715532906
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 4
        },
        "device_id": 0,
        "timestamp": 1754715533404
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715533406
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 1754715533580
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715533581
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [],
            "history": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "ephemeral_data": {
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754715533582
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715533583
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715533584
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "timestamp": 1754715533585
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 1754715533759
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754715533759
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
        "timestamp": 1754715535959
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
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
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
            "clock": 4,
            "causal_tree": [
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754715535959
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754715535959
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
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
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                }
            ]
        },
        "ephemeral_data": {
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "timestamp": 1754715535960
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715535960
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754715535960
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
        "timestamp": 1754715535961
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 6
        },
        "device_id": 0,
        "timestamp": 1754715540598
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
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "text": "A",
                "id": 6,
                "id_to_left": 0,
                "timestamp": 1754700000100
            }
        ],
        "timestamp": 1754715540599
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
        "timestamp": 1754715541991
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
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
            "clock": 6,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "id": 2,
                    "id_to_left": 0,
                    "text": "A",
                    "timestamp": 1754700000000
                },
                {
                    "type": "remove",
                    "id": 4,
                    "deleted_id": 2,
                    "text": "A",
                    "timestamp": 1754700000000
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754715541991
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754715541992
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "ephemeral_data": {
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "timestamp": 1754715541992
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715541993
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            }
        ],
        "timestamp": 1754715541993
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000B",
        "timestamp": 1754715541993
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
        "timestamp": 1754715542725
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
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
            "clock": 8,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754715542725
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754715542725
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "ephemeral_data": {
            "clock": 10,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754715542725
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715542726
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            }
        ],
        "timestamp": 1754715542726
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 1754715542727
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
        "timestamp": 1754715543959
    },
    {
        "type": "normalize_dom_change",
        "main_data": {
            "current": [
                {
                    "id": 6,
                    "c": "A"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
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
            "clock": 10,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 1754715543959
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            }
        ],
        "timestamp": 1754715543959
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                }
            ]
        },
        "ephemeral_data": {
            "clock": 12,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754715543959
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 12,
                "deleted_id": 6,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715543960
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            }
        ],
        "timestamp": 1754715543960
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 1754715543961
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "changes",
            "value": [
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000300
                }
            ]
        },
        "device_id": 0,
        "timestamp": 1754715547409
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000500
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754715547410
    },
    {
        "type": "save_to_disk",
        "main_data": {
            "current": [
                {
                    "id": 9,
                    "c": "D"
                },
                {
                    "id": 11,
                    "c": "E"
                },
                {
                    "id": 8,
                    "c": "B"
                },
                {
                    "id": 10,
                    "c": "C"
                }
            ],
            "history": [
                {
                    "type": "compressed history",
                    "serialization": {
                        "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                        "time": 1754700000000,
                        "baseline": 6
                    },
                    "final_state": {
                        "state_1": {
                            "current": [
                                {
                                    "id": 6,
                                    "c": "A"
                                }
                            ]
                        },
                        "state_2": {
                            "clock": 6,
                            "causal_tree": [
                                {
                                    "type": "add",
                                    "text": "A",
                                    "id": 6,
                                    "id_to_left": 0,
                                    "timestamp": 1754700000100
                                }
                            ]
                        }
                    },
                    "id": 6
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000500
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000600
                }
            ]
        },
        "ephemeral_data": {
            "clock": 12,
            "causal_tree": [
                {
                    "type": "add",
                    "text": "A",
                    "id": 6,
                    "id_to_left": 0,
                    "timestamp": 1754700000100
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 12,
                    "deleted_id": 6,
                    "timestamp": 1754700000400
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 9,
                    "id_to_left": 6,
                    "timestamp": 1754700000500
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 11,
                    "id_to_left": 9,
                    "timestamp": 1754700000600
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 8,
                    "id_to_left": 6,
                    "timestamp": 1754700000200
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 10,
                    "id_to_left": 8,
                    "timestamp": 1754700000300
                }
            ]
        },
        "timestamp": 1754715547410
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 6,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 12,
                "deleted_id": 6,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 9,
                "id_to_left": 6,
                "text": "D",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 11,
                "id_to_left": 9,
                "text": "E",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 8,
                "id_to_left": 6,
                "text": "B",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 10,
                "id_to_left": 8,
                "text": "C",
                "timestamp": 1754700000000
            },
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754700000000
            },
            {
                "type": "remove",
                "id": 4,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754700000000
            }
        ],
        "timestamp": 1754715547411
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
                    "time": 1754700000000,
                    "baseline": 6
                },
                "final_state": {
                    "state_1": {
                        "current": [
                            {
                                "id": 6,
                                "c": "A"
                            }
                        ]
                    },
                    "state_2": {
                        "clock": 6,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "A",
                                "id": 6,
                                "id_to_left": 0,
                                "timestamp": 1754700000100
                            }
                        ]
                    }
                },
                "id": 6
            },
            {
                "type": "add",
                "text": "B",
                "id": 8,
                "id_to_left": 6,
                "timestamp": 1754700000200
            },
            {
                "type": "add",
                "text": "C",
                "id": 10,
                "id_to_left": 8,
                "timestamp": 1754700000300
            },
            {
                "type": "remove",
                "text": "A",
                "id": 12,
                "deleted_id": 6,
                "timestamp": 1754700000400
            },
            {
                "type": "add",
                "text": "D",
                "id": 9,
                "id_to_left": 6,
                "timestamp": 1754700000500
            },
            {
                "type": "add",
                "text": "E",
                "id": 11,
                "id_to_left": 9,
                "timestamp": 1754700000600
            }
        ],
        "timestamp": 1754715547411
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 1754715547412
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 12
        },
        "device_id": 0,
        "timestamp": 1754715547596
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754715547596
    },
    {shifted_elements: [
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754715547412
    }
    ]},
];
