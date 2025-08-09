const transcript_for_testing = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "device_id": 0,
        "timestamp": 1754716784122
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 4
        },
        "device_id": 0,
        "timestamp": 1754716785341
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
        "timestamp": 1754716785342
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 1754716785515
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
        "timestamp": 1754716785516
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
        "timestamp": 1754716785516
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
        "timestamp": 1754716785517
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
        "timestamp": 1754716785518
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "timestamp": 1754716785519
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 1754716785695
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 0,
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
        "timestamp": 1754716785695
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754716785695
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 0,
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
            }
        },
        "output": [
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
        ],
        "timestamp": 1754716785696
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
        "timestamp": 1754716787895
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
        "timestamp": 1754716787896
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
        "timestamp": 1754716787896
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
        "timestamp": 1754716787897
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
        "timestamp": 1754716787897
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
        "timestamp": 1754716787898
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
        "timestamp": 1754716787899
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 6
        },
        "device_id": 0,
        "timestamp": 1754716792534
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 6,
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
        "timestamp": 1754716792534
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
        "timestamp": 1754716792534
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 6,
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
            }
        },
        "output": [
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
        ],
        "timestamp": 1754716792535
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
        "timestamp": 1754716793928
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
        "timestamp": 1754716793928
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
        "timestamp": 1754716793928
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
        "timestamp": 1754716793929
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
        "timestamp": 1754716793929
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
        "timestamp": 1754716793929
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000B",
        "timestamp": 1754716793930
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
        "timestamp": 1754716794662
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
        "timestamp": 1754716794662
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
        "timestamp": 1754716794662
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
        "timestamp": 1754716794662
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
        "timestamp": 1754716794663
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
        "timestamp": 1754716794663
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 1754716794664
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
        "timestamp": 1754716795895
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
        "timestamp": 1754716795895
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
        "timestamp": 1754716795896
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
        "timestamp": 1754716795896
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
        "timestamp": 1754716795897
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
        "timestamp": 1754716795897
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 1754716795898
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
        "timestamp": 1754716799346
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
        "timestamp": 1754716799346
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
        "timestamp": 1754716799347
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
        "timestamp": 1754716799348
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
        "timestamp": 1754716799348
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 1754716799348
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 12
        },
        "device_id": 0,
        "timestamp": 1754716799532
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 12,
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
        "timestamp": 1754716799532
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
        "timestamp": 1754716799532
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 12,
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
            }
        },
        "output": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
                    "time": 1754700000000,
                    "baseline": 12
                },
                "final_state": {
                    "state_1": {
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
                        ]
                    },
                    "state_2": {
                        "clock": 12,
                        "causal_tree": [
                            {
                                "type": "add",
                                "text": "D",
                                "id": 9,
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
                    }
                },
                "id": 12
            }
        ],
        "timestamp": 1754716799534
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
        "timestamp": 1754717097437
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 4
        },
        "device_id": 0,
        "timestamp": 1754717099072
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
        "timestamp": 1754717099073
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 1754717099246
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
        "timestamp": 1754717099247
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
        "timestamp": 1754717099248
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
        "timestamp": 1754717099249
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
        "timestamp": 1754717099249
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000A",
        "timestamp": 1754717099251
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 1754717099426
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 0,
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
        "timestamp": 1754717099426
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754717099426
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 0,
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
            }
        },
        "output": [
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
        ],
        "timestamp": 1754717099427
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
        "timestamp": 1754717101626
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
        "timestamp": 1754717101626
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
        "timestamp": 1754717101627
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
        "timestamp": 1754717101627
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
        "timestamp": 1754717101628
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
        "timestamp": 1754717101628
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002A",
        "timestamp": 1754717101629
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 6
        },
        "device_id": 0,
        "timestamp": 1754717106265
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 6,
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
        "timestamp": 1754717106265
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
        "timestamp": 1754717106266
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 6,
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
            }
        },
        "output": [
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
        ],
        "timestamp": 1754717106266
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
        "timestamp": 1754717107660
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
        "timestamp": 1754717107660
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
        "timestamp": 1754717107660
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
        "timestamp": 1754717107661
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
        "timestamp": 1754717107661
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
        "timestamp": 1754717107662
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000B",
        "timestamp": 1754717107662
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
        "timestamp": 1754717108392
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
        "timestamp": 1754717108392
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
        "timestamp": 1754717108393
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
        "timestamp": 1754717108393
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
        "timestamp": 1754717108393
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
        "timestamp": 1754717108394
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 1754717108394
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
        "timestamp": 1754717109627
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
        "timestamp": 1754717109627
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
        "timestamp": 1754717109627
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
        "timestamp": 1754717109627
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
        "timestamp": 1754717109628
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
        "timestamp": 1754717109628
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 1754717109629
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
        "timestamp": 1754717113077
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
        "timestamp": 1754717113077
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
        "timestamp": 1754717113078
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
        "timestamp": 1754717113078
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
        "timestamp": 1754717113079
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êêÞa\u0002\u0000Ar\u0002\u0000Aa\u0002Aa\u0002\u0000Ba\u0001Da\u0001Ca\u0001Er\u0001A",
        "timestamp": 1754717113079
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 12
        },
        "device_id": 0,
        "timestamp": 1754717113264
    },
    {
        "type": "cleanup_history",
        "cutoff_id": 12,
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
                    }
                }
            ]
        },
        "timestamp": 1754717113264
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 1754717113264
    },
    {
        "type": "output",
        "call_record": {
            "type": "cleanup_history",
            "cutoff_id": 12,
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
                        }
                    }
                ]
            }
        },
        "output": [
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
                "id": 12
            }
        ],
        "timestamp": 1754717113265
    },
    {shifted_elements: [
        {
            "type": "cleanup_history",
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
            "timestamp": 1754717113079
        },
        {
            "type": "replay",
            "history": [],
            "timestamp": 1754717113079
        },
        {
            "type": "output",
            "call_record": {
                "type": "cleanup_history",
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
                }
            },
            "output": [
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
                    }
                }
            ],
            "timestamp": 1754717113080
        },
    ]},
];

// Bug transcript: transcript_3: id 211 (after cleanup cutoff 202) references id 181, which was deleted at 200 (before cutoff 202)
const transcript_3 = [
  {"type":"localStorage.getItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.","device_id":0,"timestamp":1754719615023},{"type":"handle_decrypted_message","message":{"type":"latest clock","value":164},"device_id":0,"timestamp":1754719615224},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719615225},{"type":"handle_decrypted_message","message":{"type":"latest history","value":[]},"device_id":0,"timestamp":1754719615382},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719615383},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."}],"history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"ephemeral_data":{"clock":164,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719615383},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719615384},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719615385},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.","timestamp":1754719615386},{"type":"handle_decrypted_message","message":{"type":"ack","value":65},"device_id":0,"timestamp":1754719615591},{"type":"cleanup_history","cutoff_id":65,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."}],"history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719615591},{"type":"replay","history":[{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}],"timestamp":1754719615591},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":65,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."}],"history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719615593},{"type":"on_change","change":{"prev_value":"All right cool.","removed":"","inserted":" ","index":15,"new_value":"All right cool. "},"device_id":0,"timestamp":1754719627811},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"change":{"prev_value":"All right cool.","removed":"","inserted":" ","index":15,"new_value":"All right cool. "},"ephemeral_data":{"clock":164,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719627811},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100}],"timestamp":1754719627812},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100}]},"ephemeral_data":{"clock":166,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719627813},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719627814},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100}],"timestamp":1754719627814},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 ","timestamp":1754719627815},{"type":"on_change","change":{"prev_value":"All right cool. ","removed":"","inserted":"Y","index":16,"new_value":"All right cool. Y"},"device_id":0,"timestamp":1754719627964},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100}]},"change":{"prev_value":"All right cool. ","removed":"","inserted":"Y","index":16,"new_value":"All right cool. Y"},"ephemeral_data":{"clock":166,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719627965},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200}],"timestamp":1754719627965},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200}]},"ephemeral_data":{"clock":168,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719627966},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719627966},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200}],"timestamp":1754719627967},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Y","timestamp":1754719627968},{"type":"on_change","change":{"prev_value":"All right cool. Y","removed":"","inserted":"e","index":17,"new_value":"All right cool. Ye"},"device_id":0,"timestamp":1754719628255},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200}]},"change":{"prev_value":"All right cool. Y","removed":"","inserted":"e","index":17,"new_value":"All right cool. Ye"},"ephemeral_data":{"clock":168,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719628256},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300}],"timestamp":1754719628256},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300}]},"ephemeral_data":{"clock":170,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719628257},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719628257},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300}],"timestamp":1754719628258},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000e","timestamp":1754719628259},{"type":"on_change","change":{"prev_value":"All right cool. Ye","removed":"","inserted":"a","index":18,"new_value":"All right cool. Yea"},"device_id":0,"timestamp":1754719628293},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300}]},"change":{"prev_value":"All right cool. Ye","removed":"","inserted":"a","index":18,"new_value":"All right cool. Yea"},"ephemeral_data":{"clock":170,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719628294},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400}],"timestamp":1754719628294},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400}]},"ephemeral_data":{"clock":172,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719628295},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719628295},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400}],"timestamp":1754719628296},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000a","timestamp":1754719628296},{"type":"on_change","change":{"prev_value":"All right cool. Yea","removed":"","inserted":"h","index":19,"new_value":"All right cool. Yeah"},"device_id":0,"timestamp":1754719628419},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400}]},"change":{"prev_value":"All right cool. Yea","removed":"","inserted":"h","index":19,"new_value":"All right cool. Yeah"},"ephemeral_data":{"clock":172,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719628419},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}],"timestamp":1754719628419},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]},"ephemeral_data":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719628420},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719628420},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}],"timestamp":1754719628421},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000h","timestamp":1754719628421},{"type":"on_change","change":{"prev_value":"All right cool. Yeah","removed":"","inserted":".","index":20,"new_value":"All right cool. Yeah."},"device_id":0,"timestamp":1754719629234},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]},"change":{"prev_value":"All right cool. Yeah","removed":"","inserted":".","index":20,"new_value":"All right cool. Yeah."},"ephemeral_data":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"self_device_id":0,"timestamp":1754719629234},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}],"timestamp":1754719629235},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]},"ephemeral_data":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}]},"timestamp":1754719629236},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719629236},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}],"timestamp":1754719629237},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","timestamp":1754719629238},{"type":"handle_decrypted_message","message":{"type":"ack","value":174},"device_id":0,"timestamp":1754719629404},{"type":"cleanup_history","cutoff_id":174,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]},"timestamp":1754719629404},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}],"timestamp":1754719629404},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":174,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000t","time":1754700000000,"baseline":65},"final_state":{"state_1":{"current":[{"id":43,"c":"s"},{"id":47,"c":"y"},{"id":49,"c":"e"},{"id":51,"c":"a"},{"id":53,"c":"h"},{"id":55,"c":" "},{"id":57,"c":"p"},{"id":59,"c":"r"},{"id":61,"c":"e"},{"id":63,"c":"t"},{"id":65,"c":"t"},{"id":42,"c":"a"},{"id":4,"c":"e"},{"id":6,"c":"y"},{"id":8,"c":","},{"id":10,"c":" "},{"id":12,"c":"h"},{"id":14,"c":"o"},{"id":16,"c":"w"},{"id":18,"c":"'"},{"id":20,"c":"s"},{"id":22,"c":" "},{"id":24,"c":"i"},{"id":26,"c":"t"},{"id":28,"c":" "},{"id":30,"c":"g"},{"id":32,"c":"o"},{"id":34,"c":"i"},{"id":36,"c":"n"},{"id":38,"c":"g"},{"id":40,"c":"?"}]},"state_2":{"clock":65,"causal_tree":[{"type":"add","id":43,"id_to_left":0,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":0,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":0,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000}]}},"id":65},{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000h","time":1754700000000,"baseline":174},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}]},"state_2":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]}},"id":174},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}],"timestamp":1754719629405},{"type":"handle_decrypted_message","message":{"type":"ack","value":176},"device_id":0,"timestamp":1754719636389},{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000h","time":1754700000000,"baseline":174},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}]},"state_2":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]}},"id":174},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]},"timestamp":1754719636390},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000h","time":1754700000000,"baseline":174},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}]},"state_2":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]}},"id":174},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}],"timestamp":1754719636390},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000h","time":1754700000000,"baseline":174},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"}]},"state_2":{"clock":174,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500}]}},"id":174},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176}],"timestamp":1754719636390},{"type":"handle_decrypted_message","message":{"type":"changes","value":[{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}],"highest_id_received":176},"device_id":0,"timestamp":1754719678233},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}],"timestamp":1754719678233},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}]},"ephemeral_data":{"clock":183,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}]},"timestamp":1754719678234},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719678235},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}],"timestamp":1754719678236},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Y","timestamp":1754719678236},{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}]},"timestamp":1754719678237},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176}],"timestamp":1754719678237},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900}],"timestamp":1754719678238},{"type":"handle_decrypted_message","message":{"type":"changes","value":[{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}],"highest_id_received":176},"device_id":0,"timestamp":1754719685235},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}],"timestamp":1754719685235},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"ephemeral_data":{"clock":189,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719685235},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719685236},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}],"timestamp":1754719685236},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.","timestamp":1754719685237},{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719685238},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176}],"timestamp":1754719685238},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}],"timestamp":1754719685238},{"type":"on_change","change":{"prev_value":"All right cool. Yeah.\n\nYup.","removed":"","inserted":"a","index":23,"new_value":"All right cool. Yeah.\n\naYup."},"device_id":0,"timestamp":1754719691438},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"change":{"prev_value":"All right cool. Yeah.\n\nYup.","removed":"","inserted":"a","index":23,"new_value":"All right cool. Yeah.\n\naYup."},"ephemeral_data":{"clock":189,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"self_device_id":0,"timestamp":1754719691438},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300}],"timestamp":1754719691439},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300}]},"ephemeral_data":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719691439},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":190,"id_to_left":181,"text":"a","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719691440},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300}],"timestamp":1754719691440},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","timestamp":1754719691441},{"type":"handle_decrypted_message","message":{"type":"changes","value":[{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001300},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001400},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001500},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001600},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001700}],"highest_id_received":176},"device_id":0,"timestamp":1754719692237},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}],"timestamp":1754719692237},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]},"ephemeral_data":{"clock":199,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719692238},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":190,"id_to_left":181,"text":"a","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"remove","id":199,"deleted_id":183,"text":"Y","timestamp":1754700000000},{"type":"add","id":191,"id_to_left":183,"text":"a","timestamp":1754700000000},{"type":"add","id":193,"id_to_left":191,"text":"s","timestamp":1754700000000},{"type":"add","id":195,"id_to_left":193,"text":"d","timestamp":1754700000000},{"type":"add","id":197,"id_to_left":195,"text":"f","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719692238},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}],"timestamp":1754719692239},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Y","timestamp":1754719692240},{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]},"timestamp":1754719692240},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176}],"timestamp":1754719692240},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":176,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}],"timestamp":1754719692241},{"type":"handle_decrypted_message","message":{"type":"ack","value":190},"device_id":0,"timestamp":1754719692409},{"type":"cleanup_history","cutoff_id":190,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]},"timestamp":1754719692409},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300}],"timestamp":1754719692409},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":190,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.","time":1754700000000,"baseline":176},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."}]},"state_2":{"clock":176,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600}]}},"id":176},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}],"timestamp":1754719692410},{"type":"on_change","change":{"prev_value":"All right cool. Yeah.\n\naasdfup.","removed":"\n","inserted":"","index":22,"new_value":"All right cool. Yeah.\naasdfup."},"device_id":0,"timestamp":1754719692411},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800}]},"change":{"prev_value":"All right cool. Yeah.\n\naasdfup.","removed":"\n","inserted":"","index":22,"new_value":"All right cool. Yeah.\naasdfup."},"ephemeral_data":{"clock":199,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"self_device_id":0,"timestamp":1754719692411},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900}],"timestamp":1754719692411},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900}]},"ephemeral_data":{"clock":200,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719692412},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"remove","id":200,"deleted_id":181,"text":"\n","timestamp":1754700000000},{"type":"add","id":190,"id_to_left":181,"text":"a","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"remove","id":199,"deleted_id":183,"text":"Y","timestamp":1754700000000},{"type":"add","id":191,"id_to_left":183,"text":"a","timestamp":1754700000000},{"type":"add","id":193,"id_to_left":191,"text":"s","timestamp":1754700000000},{"type":"add","id":195,"id_to_left":193,"text":"d","timestamp":1754700000000},{"type":"add","id":197,"id_to_left":195,"text":"f","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719692412},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900}],"timestamp":1754719692413},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\n","timestamp":1754719692415},{"type":"on_change","change":{"prev_value":"All right cool. Yeah.\naasdfup.","removed":"","inserted":"\n","index":22,"new_value":"All right cool. Yeah.\n\naasdfup."},"device_id":0,"timestamp":1754719693422},{"type":"normalize_dom_change","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900}]},"change":{"prev_value":"All right cool. Yeah.\naasdfup.","removed":"","inserted":"\n","index":22,"new_value":"All right cool. Yeah.\n\naasdfup."},"ephemeral_data":{"clock":200,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"self_device_id":0,"timestamp":1754719693422},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}],"timestamp":1754719693423},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}]},"ephemeral_data":{"clock":202,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719693423},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":202,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"remove","id":200,"deleted_id":181,"text":"\n","timestamp":1754700000000},{"type":"add","id":190,"id_to_left":181,"text":"a","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"remove","id":199,"deleted_id":183,"text":"Y","timestamp":1754700000000},{"type":"add","id":191,"id_to_left":183,"text":"a","timestamp":1754700000000},{"type":"add","id":193,"id_to_left":191,"text":"s","timestamp":1754700000000},{"type":"add","id":195,"id_to_left":193,"text":"d","timestamp":1754700000000},{"type":"add","id":197,"id_to_left":195,"text":"f","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719693424},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}],"timestamp":1754719693425},{"type":"localStorage.setItem","key":"main_text_box_history","value":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\na\u0002\n","timestamp":1754719693425},{"type":"handle_decrypted_message","message":{"type":"ack","value":202},"device_id":0,"timestamp":1754719699407},{"type":"cleanup_history","cutoff_id":202,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}]},"timestamp":1754719699407},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}],"timestamp":1754719699407},{"type":"output","call_record":{"type":"cleanup_history","cutoff_id":202,"main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001a","time":1754700000000,"baseline":190},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":181,"c":"\n"},{"id":190,"c":"a"},{"id":183,"c":"Y"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":190,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":181,"id_to_left":179,"timestamp":1754700000800},{"type":"add","text":"a","id":190,"id_to_left":181,"timestamp":1754700001300},{"type":"add","text":"Y","id":183,"id_to_left":181,"timestamp":1754700000900},{"type":"add","text":"u","id":185,"id_to_left":183,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":190},{"type":"add","text":"a","id":191,"id_to_left":183,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"Y","id":199,"deleted_id":183,"timestamp":1754700001800},{"type":"remove","text":"\n","id":200,"deleted_id":181,"timestamp":1754700001900},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000}]}},"output":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\na\u0002\n","time":1754700000000,"baseline":202},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":202,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"a","id":190,"id_to_left":202,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":190,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":190,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":202}],"timestamp":1754719699408},{"type":"handle_decrypted_message","message":{"type":"changes","value":[{"type":"remove","text":"a","id":201,"deleted_id":190,"timestamp":1754700001900},{"type":"remove","text":"a","id":203,"deleted_id":191,"timestamp":1754700001900},{"type":"remove","text":"s","id":205,"deleted_id":193,"timestamp":1754700001900},{"type":"remove","text":"d","id":207,"deleted_id":195,"timestamp":1754700001900},{"type":"remove","text":"f","id":209,"deleted_id":197,"timestamp":1754700001900},{"type":"add","text":"Y","id":211,"id_to_left":181,"timestamp":1754700001900}],"highest_id_received":202},"device_id":0,"timestamp":1754719706237},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\na\u0002\n","time":1754700000000,"baseline":202},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":202,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"a","id":190,"id_to_left":202,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":190,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":190,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":202},{"type":"remove","text":"a","id":201,"deleted_id":190,"timestamp":1754700002100},{"type":"remove","text":"a","id":203,"deleted_id":191,"timestamp":1754700002200},{"type":"remove","text":"s","id":205,"deleted_id":193,"timestamp":1754700002300},{"type":"remove","text":"d","id":207,"deleted_id":195,"timestamp":1754700002400},{"type":"remove","text":"f","id":209,"deleted_id":197,"timestamp":1754700002500},{"type":"add","text":"Y","id":211,"id_to_left":181,"timestamp":1754700002600}],"timestamp":1754719706238},{"type":"save_to_disk","main_data":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}],"history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\na\u0002\n","time":1754700000000,"baseline":202},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":202,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"a","id":190,"id_to_left":202,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":190,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":190,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":202},{"type":"remove","text":"a","id":201,"deleted_id":190,"timestamp":1754700002100},{"type":"remove","text":"a","id":203,"deleted_id":191,"timestamp":1754700002200},{"type":"remove","text":"s","id":205,"deleted_id":193,"timestamp":1754700002300},{"type":"remove","text":"d","id":207,"deleted_id":195,"timestamp":1754700002400},{"type":"remove","text":"f","id":209,"deleted_id":197,"timestamp":1754700002500},{"type":"add","text":"Y","id":211,"id_to_left":181,"timestamp":1754700002600}]},"ephemeral_data":{"clock":211,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"a","id":190,"id_to_left":202,"timestamp":1754700001300},{"type":"remove","text":"a","id":201,"deleted_id":190,"timestamp":1754700002100},{"type":"add","text":"a","id":191,"id_to_left":190,"timestamp":1754700001400},{"type":"remove","text":"a","id":203,"deleted_id":191,"timestamp":1754700002200},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"remove","text":"s","id":205,"deleted_id":193,"timestamp":1754700002300},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"remove","text":"d","id":207,"deleted_id":195,"timestamp":1754700002400},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"remove","text":"f","id":209,"deleted_id":197,"timestamp":1754700002500},{"type":"add","text":"u","id":185,"id_to_left":190,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]},"timestamp":1754719706238},{"type":"replay","history":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","id":166,"id_to_left":164,"text":" ","timestamp":1754700000000},{"type":"add","id":168,"id_to_left":166,"text":"Y","timestamp":1754700000000},{"type":"add","id":170,"id_to_left":168,"text":"e","timestamp":1754700000000},{"type":"add","id":172,"id_to_left":170,"text":"a","timestamp":1754700000000},{"type":"add","id":174,"id_to_left":172,"text":"h","timestamp":1754700000000},{"type":"add","id":176,"id_to_left":174,"text":".","timestamp":1754700000000},{"type":"add","id":179,"id_to_left":176,"text":"\n","timestamp":1754700000000},{"type":"add","id":202,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":181,"id_to_left":179,"text":"\n","timestamp":1754700000000},{"type":"add","id":211,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"remove","id":200,"deleted_id":181,"text":"\n","timestamp":1754700000000},{"type":"add","id":190,"id_to_left":181,"text":"a","timestamp":1754700000000},{"type":"remove","id":201,"deleted_id":190,"text":"a","timestamp":1754700000000},{"type":"add","id":183,"id_to_left":181,"text":"Y","timestamp":1754700000000},{"type":"remove","id":199,"deleted_id":183,"text":"Y","timestamp":1754700000000},{"type":"add","id":191,"id_to_left":183,"text":"a","timestamp":1754700000000},{"type":"remove","id":203,"deleted_id":191,"text":"a","timestamp":1754700000000},{"type":"add","id":193,"id_to_left":191,"text":"s","timestamp":1754700000000},{"type":"remove","id":205,"deleted_id":193,"text":"s","timestamp":1754700000000},{"type":"add","id":195,"id_to_left":193,"text":"d","timestamp":1754700000000},{"type":"remove","id":207,"deleted_id":195,"text":"d","timestamp":1754700000000},{"type":"add","id":197,"id_to_left":195,"text":"f","timestamp":1754700000000},{"type":"remove","id":209,"deleted_id":197,"text":"f","timestamp":1754700000000},{"type":"add","id":185,"id_to_left":183,"text":"u","timestamp":1754700000000},{"type":"add","id":187,"id_to_left":185,"text":"p","timestamp":1754700000000},{"type":"add","id":189,"id_to_left":187,"text":".","timestamp":1754700000000},{"type":"add","id":152,"id_to_left":150,"text":"o","timestamp":1754700000000},{"type":"remove","id":154,"deleted_id":152,"text":"o","timestamp":1754700000000},{"type":"add","id":2,"id_to_left":0,"text":"H","timestamp":1754700000000},{"type":"remove","id":44,"deleted_id":2,"text":"H","timestamp":1754700000000},{"type":"add","id":43,"id_to_left":2,"text":"s","timestamp":1754700000000},{"type":"remove","id":70,"deleted_id":43,"text":"s","timestamp":1754700000000},{"type":"add","id":47,"id_to_left":43,"text":"y","timestamp":1754700000000},{"type":"remove","id":72,"deleted_id":47,"text":"y","timestamp":1754700000000},{"type":"add","id":49,"id_to_left":47,"text":"e","timestamp":1754700000000},{"type":"remove","id":74,"deleted_id":49,"text":"e","timestamp":1754700000000},{"type":"add","id":51,"id_to_left":49,"text":"a","timestamp":1754700000000},{"type":"remove","id":76,"deleted_id":51,"text":"a","timestamp":1754700000000},{"type":"add","id":53,"id_to_left":51,"text":"h","timestamp":1754700000000},{"type":"remove","id":78,"deleted_id":53,"text":"h","timestamp":1754700000000},{"type":"add","id":55,"id_to_left":53,"text":" ","timestamp":1754700000000},{"type":"remove","id":80,"deleted_id":55,"text":" ","timestamp":1754700000000},{"type":"add","id":57,"id_to_left":55,"text":"p","timestamp":1754700000000},{"type":"remove","id":82,"deleted_id":57,"text":"p","timestamp":1754700000000},{"type":"add","id":59,"id_to_left":57,"text":"r","timestamp":1754700000000},{"type":"remove","id":84,"deleted_id":59,"text":"r","timestamp":1754700000000},{"type":"add","id":61,"id_to_left":59,"text":"e","timestamp":1754700000000},{"type":"remove","id":86,"deleted_id":61,"text":"e","timestamp":1754700000000},{"type":"add","id":63,"id_to_left":61,"text":"t","timestamp":1754700000000},{"type":"remove","id":88,"deleted_id":63,"text":"t","timestamp":1754700000000},{"type":"add","id":65,"id_to_left":63,"text":"t","timestamp":1754700000000},{"type":"remove","id":90,"deleted_id":65,"text":"t","timestamp":1754700000000},{"type":"add","id":42,"id_to_left":2,"text":"a","timestamp":1754700000000},{"type":"remove","id":92,"deleted_id":42,"text":"a","timestamp":1754700000000},{"type":"add","id":4,"id_to_left":2,"text":"e","timestamp":1754700000000},{"type":"remove","id":94,"deleted_id":4,"text":"e","timestamp":1754700000000},{"type":"add","id":6,"id_to_left":4,"text":"y","timestamp":1754700000000},{"type":"remove","id":96,"deleted_id":6,"text":"y","timestamp":1754700000000},{"type":"add","id":8,"id_to_left":6,"text":",","timestamp":1754700000000},{"type":"remove","id":98,"deleted_id":8,"text":",","timestamp":1754700000000},{"type":"add","id":10,"id_to_left":8,"text":" ","timestamp":1754700000000},{"type":"remove","id":100,"deleted_id":10,"text":" ","timestamp":1754700000000},{"type":"add","id":12,"id_to_left":10,"text":"h","timestamp":1754700000000},{"type":"remove","id":102,"deleted_id":12,"text":"h","timestamp":1754700000000},{"type":"add","id":14,"id_to_left":12,"text":"o","timestamp":1754700000000},{"type":"remove","id":104,"deleted_id":14,"text":"o","timestamp":1754700000000},{"type":"add","id":16,"id_to_left":14,"text":"w","timestamp":1754700000000},{"type":"remove","id":106,"deleted_id":16,"text":"w","timestamp":1754700000000},{"type":"add","id":18,"id_to_left":16,"text":"'","timestamp":1754700000000},{"type":"remove","id":108,"deleted_id":18,"text":"'","timestamp":1754700000000},{"type":"add","id":20,"id_to_left":18,"text":"s","timestamp":1754700000000},{"type":"remove","id":110,"deleted_id":20,"text":"s","timestamp":1754700000000},{"type":"add","id":22,"id_to_left":20,"text":" ","timestamp":1754700000000},{"type":"remove","id":112,"deleted_id":22,"text":" ","timestamp":1754700000000},{"type":"add","id":24,"id_to_left":22,"text":"i","timestamp":1754700000000},{"type":"remove","id":114,"deleted_id":24,"text":"i","timestamp":1754700000000},{"type":"add","id":26,"id_to_left":24,"text":"t","timestamp":1754700000000},{"type":"remove","id":116,"deleted_id":26,"text":"t","timestamp":1754700000000},{"type":"add","id":68,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":118,"deleted_id":68,"text":" ","timestamp":1754700000000},{"type":"add","id":28,"id_to_left":26,"text":" ","timestamp":1754700000000},{"type":"remove","id":66,"deleted_id":28,"text":" ","timestamp":1754700000000},{"type":"add","id":30,"id_to_left":28,"text":"g","timestamp":1754700000000},{"type":"remove","id":120,"deleted_id":30,"text":"g","timestamp":1754700000000},{"type":"add","id":32,"id_to_left":30,"text":"o","timestamp":1754700000000},{"type":"remove","id":122,"deleted_id":32,"text":"o","timestamp":1754700000000},{"type":"add","id":34,"id_to_left":32,"text":"i","timestamp":1754700000000},{"type":"remove","id":124,"deleted_id":34,"text":"i","timestamp":1754700000000},{"type":"add","id":36,"id_to_left":34,"text":"n","timestamp":1754700000000},{"type":"remove","id":126,"deleted_id":36,"text":"n","timestamp":1754700000000},{"type":"add","id":38,"id_to_left":36,"text":"g","timestamp":1754700000000},{"type":"remove","id":128,"deleted_id":38,"text":"g","timestamp":1754700000000},{"type":"add","id":40,"id_to_left":38,"text":"?","timestamp":1754700000000},{"type":"remove","id":130,"deleted_id":40,"text":"?","timestamp":1754700000000}],"timestamp":1754719706238},{"type":"replay","history":[{"type":"compressed history","serialization":{"text":"t\u0014êêÞa\u0002\u0000Ha\u0002\u0000ea\u0002\u0000ya\u0002\u0000,a\u0002\u0000 a\u0002\u0000ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ia\u0002\u0000ta\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?a\u0002¦aa\u0001¨sr\u0001©Ha\u0003ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000 a\u0002\u0000pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000tr\u0001¥ a\u0002¨ r\u0002sr\u0002yr\u0002er\u0002ar\u0002hr\u0002 r\u0002pr\u0002rr\u0002er\u0002tr\u0002tr\u0002°ar\u0002ÀXer\u0002ÀXyr\u0002ÀX,r\u0002ÀX r\u0002ÀXhr\u0002ÀXor\u0002ÀXwr\u0002ÀX'r\u0002ÀXsr\u0002ÀX r\u0002ÀXir\u0002ÀXtr\u0002° r\u0002ÀXgr\u0002ÀXor\u0002ÀXir\u0002ÀXnr\u0002ÀXgr\u0002ÀX?a\u0002Á\u0002Aa\u0002\u0000la\u0002\u0000la\u0002\u0000 a\u0002\u0000ra\u0002\u0000ia\u0002\u0000ga\u0002\u0000ha\u0002\u0000ta\u0002\u0000 a\u0002\u0000or\u0002\u0000oa\u0002ca\u0002\u0000oa\u0002\u0000oa\u0002\u0000la\u0002\u0000.a\u0002\u0000 a\u0002\u0000Ya\u0002\u0000ea\u0002\u0000aa\u0002\u0000ha\u0002\u0000.a\u0003\u0000\na\u0002\u0000\na\u0002\u0000Ya\u0002\u0000ua\u0002\u0000pa\u0002\u0000.a\u0001aa\u0001aa\u0002\u0000sa\u0002\u0000da\u0002\u0000fr\u0002Yr\u0001\na\u0002\n","time":1754700000000,"baseline":202},"final_state":{"state_1":{"current":[{"id":132,"c":"A"},{"id":134,"c":"l"},{"id":136,"c":"l"},{"id":138,"c":" "},{"id":140,"c":"r"},{"id":142,"c":"i"},{"id":144,"c":"g"},{"id":146,"c":"h"},{"id":148,"c":"t"},{"id":150,"c":" "},{"id":156,"c":"c"},{"id":158,"c":"o"},{"id":160,"c":"o"},{"id":162,"c":"l"},{"id":164,"c":"."},{"id":166,"c":" "},{"id":168,"c":"Y"},{"id":170,"c":"e"},{"id":172,"c":"a"},{"id":174,"c":"h"},{"id":176,"c":"."},{"id":179,"c":"\n"},{"id":202,"c":"\n"},{"id":190,"c":"a"},{"id":191,"c":"a"},{"id":193,"c":"s"},{"id":195,"c":"d"},{"id":197,"c":"f"},{"id":185,"c":"u"},{"id":187,"c":"p"},{"id":189,"c":"."}]},"state_2":{"clock":202,"causal_tree":[{"type":"add","id":132,"id_to_left":0,"text":"A","timestamp":1754700000000},{"type":"add","id":134,"id_to_left":132,"text":"l","timestamp":1754700000000},{"type":"add","id":136,"id_to_left":134,"text":"l","timestamp":1754700000000},{"type":"add","id":138,"id_to_left":136,"text":" ","timestamp":1754700000000},{"type":"add","id":140,"id_to_left":138,"text":"r","timestamp":1754700000000},{"type":"add","id":142,"id_to_left":140,"text":"i","timestamp":1754700000000},{"type":"add","id":144,"id_to_left":142,"text":"g","timestamp":1754700000000},{"type":"add","id":146,"id_to_left":144,"text":"h","timestamp":1754700000000},{"type":"add","id":148,"id_to_left":146,"text":"t","timestamp":1754700000000},{"type":"add","id":150,"id_to_left":148,"text":" ","timestamp":1754700000000},{"type":"add","id":156,"id_to_left":150,"text":"c","timestamp":1754700000000},{"type":"add","id":158,"id_to_left":156,"text":"o","timestamp":1754700000000},{"type":"add","id":160,"id_to_left":158,"text":"o","timestamp":1754700000000},{"type":"add","id":162,"id_to_left":160,"text":"l","timestamp":1754700000000},{"type":"add","id":164,"id_to_left":162,"text":".","timestamp":1754700000000},{"type":"add","text":" ","id":166,"id_to_left":164,"timestamp":1754700000100},{"type":"add","text":"Y","id":168,"id_to_left":166,"timestamp":1754700000200},{"type":"add","text":"e","id":170,"id_to_left":168,"timestamp":1754700000300},{"type":"add","text":"a","id":172,"id_to_left":170,"timestamp":1754700000400},{"type":"add","text":"h","id":174,"id_to_left":172,"timestamp":1754700000500},{"type":"add","text":".","id":176,"id_to_left":174,"timestamp":1754700000600},{"type":"add","text":"\n","id":179,"id_to_left":176,"timestamp":1754700000700},{"type":"add","text":"\n","id":202,"id_to_left":179,"timestamp":1754700002000},{"type":"add","text":"a","id":190,"id_to_left":202,"timestamp":1754700001300},{"type":"add","text":"a","id":191,"id_to_left":190,"timestamp":1754700001400},{"type":"add","text":"s","id":193,"id_to_left":191,"timestamp":1754700001500},{"type":"add","text":"d","id":195,"id_to_left":193,"timestamp":1754700001600},{"type":"add","text":"f","id":197,"id_to_left":195,"timestamp":1754700001700},{"type":"add","text":"u","id":185,"id_to_left":190,"timestamp":1754700001000},{"type":"add","text":"p","id":187,"id_to_left":185,"timestamp":1754700001100},{"type":"add","text":".","id":189,"id_to_left":187,"timestamp":1754700001200}]}},"id":202},{"type":"remove","text":"a","id":201,"deleted_id":190,"timestamp":1754700002100},{"type":"remove","text":"a","id":203,"deleted_id":191,"timestamp":1754700002200},{"type":"remove","text":"s","id":205,"deleted_id":193,"timestamp":1754700002300},{"type":"remove","text":"d","id":207,"deleted_id":195,"timestamp":1754700002400},{"type":"remove","text":"f","id":209,"deleted_id":197,"timestamp":1754700002500},{"type":"add","text":"Y","id":211,"id_to_left":181,"timestamp":1754700002600}],"timestamp":1754719706239}
];
