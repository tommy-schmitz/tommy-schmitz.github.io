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
