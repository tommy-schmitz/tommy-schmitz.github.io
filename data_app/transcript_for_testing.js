const transcript_for_testing = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "",
        "device_id": 0,
        "timestamp": 3942.5
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4190.10000038147
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4190.800000190735
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 4488.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4489.5
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
        "timestamp": 4490.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4491.699999809265
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4492.400000572205
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 4493.10000038147
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4714.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4714.900000572205
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
        "timestamp": 22565.400000572205
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
        "timestamp": 22565.699999809265
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
                "timestamp": 1754713006648
            }
        ],
        "timestamp": 22565.900000572205
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
                    "timestamp": 1754713006648
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
                    "timestamp": 1754713006648
                }
            ]
        },
        "timestamp": 22566.400000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            }
        ],
        "timestamp": 22567.10000038147
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
                "timestamp": 1754713006648
            }
        ],
        "timestamp": 22567.400000572205
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000A",
        "timestamp": 22568.10000038147
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 2
        },
        "device_id": 0,
        "timestamp": 25399.800000190735
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
                "timestamp": 1754713006648
            }
        ],
        "timestamp": 25400
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
        "timestamp": 26491.699999809265
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713006648
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 26491.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            }
        ],
        "timestamp": 26492.199999809265
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                }
            ]
        },
        "timestamp": 26492.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 26493
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            }
        ],
        "timestamp": 26493.300000190735
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0002\u0000B",
        "timestamp": 26493.699999809265
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
        "timestamp": 26842.900000572205
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 26843
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            }
        ],
        "timestamp": 26843.300000190735
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                }
            ]
        },
        "timestamp": 26843.60000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 26844
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            }
        ],
        "timestamp": 26844.300000190735
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 26844.60000038147
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
        "timestamp": 27667.400000572205
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 27667.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713011750
            }
        ],
        "timestamp": 27668
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713011750
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713011750
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                }
            ]
        },
        "timestamp": 27668.60000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 27669.10000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713011750
            }
        ],
        "timestamp": 27670
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 27670.699999809265
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
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
                }
            ]
        },
        "device_id": 0,
        "timestamp": 32167.10000038147
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713011750
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 32168.199999809265
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
                        "text": "t\u0014êõ\u0007a\u0002\u0000A",
                        "time": 1754713005000,
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
                                    "timestamp": 1754713006648
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
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713011750
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713016250
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
                    "timestamp": 1754713006648
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713011750
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                }
            ]
        },
        "timestamp": 32169.699999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754713015000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754713015000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 32170.199999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713011750
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 32170.900000572205
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002ATaDa\u0002\u0000E",
        "timestamp": 32171.5
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 8
        },
        "device_id": 0,
        "timestamp": 32402.199999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ\u0007a\u0002\u0000A",
                    "time": 1754713005000,
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
                                "timestamp": 1754713006648
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
                "timestamp": 1754713010574
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713010925
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713011750
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 32402.400000572205
    }
];

const transcript_1_device_1 = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "",
        "device_id": 1,
        "timestamp": 5391.900000572205
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 5639.400000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 5640
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 1,
        "timestamp": 5937.200000762939
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 5939.10000038147
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
        "timestamp": 5939.900000572205
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 5940.700000762939
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 5941.10000038147
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 5942.200000762939
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 1,
        "timestamp": 6178.200000762939
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 6178.400000572205
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
                    "timestamp": 1754713006648
                }
            ]
        },
        "device_id": 1,
        "timestamp": 26633.900000572205
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
                "timestamp": 1754713009267
            }
        ],
        "timestamp": 26634.300000190735
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
                    "timestamp": 1754713009267
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
                    "timestamp": 1754713009267
                }
            ]
        },
        "timestamp": 26634.900000572205
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            }
        ],
        "timestamp": 26635.60000038147
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
                "timestamp": 1754713009267
            }
        ],
        "timestamp": 26636
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000A",
        "timestamp": 26636.60000038147
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
        "timestamp": 30540
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
                    "timestamp": 1754713009267
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
                    "timestamp": 1754713009267
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 30540.20000076294
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            }
        ],
        "timestamp": 30540.60000038147
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                }
            ]
        },
        "timestamp": 30540.800000190735
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 30541.400000572205
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            }
        ],
        "timestamp": 30541.70000076294
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0003\u0000D",
        "timestamp": 30542
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
        "timestamp": 30729.800000190735
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                }
            ]
        },
        "self_device_id": 1,
        "timestamp": 30730
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713013363
            }
        ],
        "timestamp": 30730.300000190735
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
                }
            ]
        },
        "timestamp": 30730.70000076294
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754713010000
            }
        ],
        "timestamp": 30731.300000190735
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713013363
            }
        ],
        "timestamp": 30731.5
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0003\u0000Da\u0002\u0000E",
        "timestamp": 30731.900000572205
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
                    "timestamp": 1754713010574
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713010925
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713011750
                }
            ]
        },
        "device_id": 1,
        "timestamp": 33616.400000572205
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713013363
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713016250
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 33617.20000076294
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713016250
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713016250
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
                    "timestamp": 1754713009267
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713016250
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713016250
                }
            ]
        },
        "timestamp": 33618
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713005000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754713015000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754713010000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713015000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713015000
            }
        ],
        "timestamp": 33618.70000076294
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713013363
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713016250
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 33619.5
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ\u0007a\u0002\u0000ATa\u0003\u0000Da\u0002\u0000ETaBa\u0002\u0000Cr\u0002A",
        "timestamp": 33620.10000038147
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 7
        },
        "device_id": 1,
        "timestamp": 33851.5
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
                "timestamp": 1754713009267
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713013173
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713013363
            },
            {
                "type": "add",
                "text": "B",
                "id": 4,
                "id_to_left": 2,
                "timestamp": 1754713016250
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713016250
            }
        ],
        "timestamp": 33851.70000076294
    }
];

const transcript_2 = [
    {
        "type": "localStorage.getItem",
        "key": "main_text_box_history",
        "value": "",
        "device_id": 0,
        "timestamp": 3378.199999809265
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest clock",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4190.800000190735
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4191.89999961853
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "latest history",
            "value": []
        },
        "device_id": 0,
        "timestamp": 4488.800000190735
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4489.800000190735
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
        "timestamp": 4490.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4491.099999427795
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4491.300000190735
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "",
        "timestamp": 4491.89999961853
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 0
        },
        "device_id": 0,
        "timestamp": 4714.5
    },
    {
        "type": "replay",
        "history": [],
        "timestamp": 4714.699999809265
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
        "timestamp": 22565.800000190735
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
        "timestamp": 22566
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
                "timestamp": 1754713846700
            }
        ],
        "timestamp": 22566.199999809265
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
                    "timestamp": 1754713846700
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
                    "timestamp": 1754713846700
                }
            ]
        },
        "timestamp": 22566.599999427795
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713845000
            }
        ],
        "timestamp": 22567.300000190735
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
                "timestamp": 1754713846700
            }
        ],
        "timestamp": 22567.599999427795
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ¯a\u0002\u0000A",
        "timestamp": 22568.099999427795
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 2
        },
        "device_id": 0,
        "timestamp": 25400.5
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
                "timestamp": 1754713846700
            }
        ],
        "timestamp": 25400.699999809265
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
        "timestamp": 26491.300000190735
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713846700
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 26491.39999961853
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            }
        ],
        "timestamp": 26491.699999809265
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                }
            ]
        },
        "timestamp": 26491.89999961853
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713845000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713850000
            }
        ],
        "timestamp": 26492.599999427795
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            }
        ],
        "timestamp": 26492.89999961853
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ¯a\u0002\u0000ATa\u0002\u0000B",
        "timestamp": 26493.300000190735
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
        "timestamp": 26843.39999961853
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 26843.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            }
        ],
        "timestamp": 26843.89999961853
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                }
            ]
        },
        "timestamp": 26844.39999961853
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713845000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713850000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713850000
            }
        ],
        "timestamp": 26845
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            }
        ],
        "timestamp": 26845.39999961853
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ¯a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000C",
        "timestamp": 26846
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
        "timestamp": 27668.5
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                }
            ]
        },
        "self_device_id": 0,
        "timestamp": 27668.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713851802
            }
        ],
        "timestamp": 27668.800000190735
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713851802
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713851802
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                }
            ]
        },
        "timestamp": 27669.199999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713845000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754713850000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713850000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713850000
            }
        ],
        "timestamp": 27669.699999809265
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713851802
            }
        ],
        "timestamp": 27670
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ¯a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002A",
        "timestamp": 27670.599999427795
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
                    "timestamp": 1754713013173
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713013363
                }
            ]
        },
        "device_id": 0,
        "timestamp": 32169
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713851802
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713856303
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713856303
            }
        ],
        "timestamp": 32169.5
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
                        "text": "t\u0014êõ¯a\u0002\u0000A",
                        "time": 1754713845000,
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
                                    "timestamp": 1754713846700
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
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713851802
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713856303
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713856303
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
                    "timestamp": 1754713846700
                },
                {
                    "type": "remove",
                    "text": "A",
                    "id": 8,
                    "deleted_id": 2,
                    "timestamp": 1754713851802
                },
                {
                    "type": "add",
                    "text": "D",
                    "id": 5,
                    "id_to_left": 2,
                    "timestamp": 1754713856303
                },
                {
                    "type": "add",
                    "text": "E",
                    "id": 7,
                    "id_to_left": 5,
                    "timestamp": 1754713856303
                },
                {
                    "type": "add",
                    "text": "B",
                    "id": 4,
                    "id_to_left": 2,
                    "timestamp": 1754713850625
                },
                {
                    "type": "add",
                    "text": "C",
                    "id": 6,
                    "id_to_left": 4,
                    "timestamp": 1754713850977
                }
            ]
        },
        "timestamp": 32170.099999427795
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "add",
                "id": 2,
                "id_to_left": 0,
                "text": "A",
                "timestamp": 1754713845000
            },
            {
                "type": "remove",
                "id": 8,
                "deleted_id": 2,
                "text": "A",
                "timestamp": 1754713850000
            },
            {
                "type": "add",
                "id": 5,
                "id_to_left": 2,
                "text": "D",
                "timestamp": 1754713855000
            },
            {
                "type": "add",
                "id": 7,
                "id_to_left": 5,
                "text": "E",
                "timestamp": 1754713855000
            },
            {
                "type": "add",
                "id": 4,
                "id_to_left": 2,
                "text": "B",
                "timestamp": 1754713850000
            },
            {
                "type": "add",
                "id": 6,
                "id_to_left": 4,
                "text": "C",
                "timestamp": 1754713850000
            }
        ],
        "timestamp": 32170.5
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713851802
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713856303
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713856303
            }
        ],
        "timestamp": 32170.89999961853
    },
    {
        "type": "localStorage.setItem",
        "key": "main_text_box_history",
        "value": "t\u0014êõ¯a\u0002\u0000ATa\u0002\u0000Ba\u0002\u0000Cr\u0002ATaDa\u0002\u0000E",
        "timestamp": 32171.300000190735
    },
    {
        "type": "handle_decrypted_message",
        "message": {
            "type": "ack",
            "value": 8
        },
        "device_id": 0,
        "timestamp": 32403.89999961853
    },
    {
        "type": "replay",
        "history": [
            {
                "type": "compressed history",
                "serialization": {
                    "text": "t\u0014êõ¯a\u0002\u0000A",
                    "time": 1754713845000,
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
                                "timestamp": 1754713846700
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
                "timestamp": 1754713850625
            },
            {
                "type": "add",
                "text": "C",
                "id": 6,
                "id_to_left": 4,
                "timestamp": 1754713850977
            },
            {
                "type": "remove",
                "text": "A",
                "id": 8,
                "deleted_id": 2,
                "timestamp": 1754713851802
            },
            {
                "type": "add",
                "text": "D",
                "id": 5,
                "id_to_left": 2,
                "timestamp": 1754713856303
            },
            {
                "type": "add",
                "text": "E",
                "id": 7,
                "id_to_left": 5,
                "timestamp": 1754713856303
            }
        ],
        "timestamp": 32404
    }
];
