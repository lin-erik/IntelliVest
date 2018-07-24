module.exports = {
	"matching_results": 5011,
	"aggregations": [
		{
			"type": "term",
			"field": "host",
			"results": [
				{
					"key": "news.morningstar.com",
					"matching_results": 371,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "negative",
									"matching_results": 299
								},
								{
									"key": "positive",
									"matching_results": 70
								},
								{
									"key": "neutral",
									"matching_results": 2
								}
							]
						}
					]
				},
				{
					"key": "marketwatch.com",
					"matching_results": 369,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "negative",
									"matching_results": 213
								},
								{
									"key": "positive",
									"matching_results": 153
								},
								{
									"key": "neutral",
									"matching_results": 3
								}
							]
						}
					]
				},
				{
					"key": "seekingalpha.com",
					"matching_results": 299,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "positive",
									"matching_results": 178
								},
								{
									"key": "negative",
									"matching_results": 120
								},
								{
									"key": "neutral",
									"matching_results": 1
								}
							]
						}
					]
				},
				{
					"key": "nasdaq.com",
					"matching_results": 260,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "positive",
									"matching_results": 148
								},
								{
									"key": "negative",
									"matching_results": 111
								},
								{
									"key": "neutral",
									"matching_results": 1
								}
							]
						}
					]
				},
				{
					"key": "finance.yahoo.com",
					"matching_results": 251,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "negative",
									"matching_results": 156
								},
								{
									"key": "positive",
									"matching_results": 95
								}
							]
						}
					]
				},
				{
					"key": "investors.com",
					"matching_results": 134,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "positive",
									"matching_results": 103
								},
								{
									"key": "negative",
									"matching_results": 30
								},
								{
									"key": "neutral",
									"matching_results": 1
								}
							]
						}
					]
				},
				{
					"key": "sg.finance.yahoo.com",
					"matching_results": 122,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "negative",
									"matching_results": 81
								},
								{
									"key": "positive",
									"matching_results": 41
								}
							]
						}
					]
				},
				{
					"key": "businessinsider.com",
					"matching_results": 113,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "negative",
									"matching_results": 68
								},
								{
									"key": "positive",
									"matching_results": 45
								}
							]
						}
					]
				},
				{
					"key": "zacks.com",
					"matching_results": 106,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "positive",
									"matching_results": 73
								},
								{
									"key": "negative",
									"matching_results": 32
								},
								{
									"key": "neutral",
									"matching_results": 1
								}
							]
						}
					]
				},
				{
					"key": "thestreet.com",
					"matching_results": 99,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.sentiment.document.label",
							"results": [
								{
									"key": "positive",
									"matching_results": 50
								},
								{
									"key": "negative",
									"matching_results": 47
								},
								{
									"key": "neutral",
									"matching_results": 2
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "term",
			"field": "enriched_text.sentiment.document.label",
			"results": [
				{
					"key": "negative",
					"matching_results": 2478
				},
				{
					"key": "positive",
					"matching_results": 2449
				},
				{
					"key": "neutral",
					"matching_results": 83
				}
			]
		},
		{
			"type": "timeslice",
			"field": "crawl_date",
			"interval": "1d",
			"anomaly": true,
			"results": [
				{
					"key_as_string": "2018-05-24T00:00:00.000-04:00",
					"key": 1527134400000,
					"matching_results": 46,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 9,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Elon Musk's Twitter rant is a smoke and mirrors tactic that hides the disturbing truth about Tesla (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-25T00:00:00.000-04:00",
					"key": 1527220800000,
					"matching_results": 84,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 20,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "It’s nearly time for Tesla’s board to move on Elon Musk",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-26T00:00:00.000-04:00",
					"key": 1527307200000,
					"matching_results": 60,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "CEO Elon Musk",
									"matching_results": 9,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Elon Musk may never deliver a $35,000 Model 3—and that would actually be great news for Tesla (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-27T00:00:00.000-04:00",
					"key": 1527393600000,
					"matching_results": 95,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "shares",
									"matching_results": 61,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "IBM Retirement Fund Sells 398 Shares of Tesla Inc (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-28T00:00:00.000-04:00",
					"key": 1527480000000,
					"matching_results": 38,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "NYSE",
									"matching_results": 13,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Coatue Management Has Boosted Stake in Cognex (CGNX); Kmg Chemicals (KMG) Holder Swiss National Bank Boosted Its Stake by $429,000",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-29T00:00:00.000-04:00",
					"key": 1527566400000,
					"matching_results": 76,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 20,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Better Buy: Tesla, Inc. (TSLA) vs. BMW (BMW)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-30T00:00:00.000-04:00",
					"key": 1527652800000,
					"matching_results": 75,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 34,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla, Inc. Improves Model 3 Braking by 19 Feet With Software Update",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-05-31T00:00:00.000-04:00",
					"key": 1527739200000,
					"matching_results": 74,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 22,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla drops after GM’s competing self-driving unit gets a $2.25 billion boost (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-01T00:00:00.000-04:00",
					"key": 1527825600000,
					"matching_results": 129,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 45,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla (TSLA) Research Coverage Started at Needham & Company LLC",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-02T00:00:00.000-04:00",
					"key": 1527912000000,
					"matching_results": 44,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 16,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "BidaskClub Upgrades Tesla (TSLA) to Hold",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-03T00:00:00.000-04:00",
					"key": 1527998400000,
					"matching_results": 35,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "shares",
									"matching_results": 14,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "As Baidu (BIDU) Valuation Declined, Shareholder Glovista Investments Decreased Position by $3.21 Million; Wedbush Securities Has Lowered Its International Paper (IP) Stake by $511,397; Stock Declined",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-04T00:00:00.000-04:00",
					"key": 1528084800000,
					"matching_results": 54,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 23,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Internal documents reveal Tesla is blowing through an insane amount of raw material and cash to make Model 3s, and production is still a nightmare (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-05T00:00:00.000-04:00",
					"key": 1528171200000,
					"matching_results": 139,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 47,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla is sliding ahead of its annual meeting (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-06T00:00:00.000-04:00",
					"key": 1528257600000,
					"matching_results": 228,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "CEO Elon Musk",
									"matching_results": 86,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "MARKET SNAPSHOT: Dow Futures Rise More Than 100 Points Amid Signs Of Thawing Trade Tensions",
													"matching_results": 12
												}
											]
										}
									]
								}
							]
						}
					],
					"anomaly": 1
				},
				{
					"key_as_string": "2018-06-07T00:00:00.000-04:00",
					"key": 1528344000000,
					"matching_results": 136,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 51,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Investors betting against Tesla lost $1.1 billion after Elon Musk says Model 3 production on track (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-08T00:00:00.000-04:00",
					"key": 1528430400000,
					"matching_results": 83,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 35,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "3 New, Must-See Quotes From Tesla CEO Elon Musk",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-09T00:00:00.000-04:00",
					"key": 1528516800000,
					"matching_results": 35,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 15,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Another former Tesla employee has developed his own cure for hangovers from FDA-approved ingredients (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-10T00:00:00.000-04:00",
					"key": 1528603200000,
					"matching_results": 27,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "shares",
									"matching_results": 12,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "As Cisco Systems (CSCO) Shares Declined, Holder Dubuque Bank & Trust Company Lowered Position; Bank Amer (BAC) Shares Declined While Zwj Investment Counsel Cut Its Position by $1.13 Million",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-11T00:00:00.000-04:00",
					"key": 1528689600000,
					"matching_results": 98,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 33,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Why Did Tesla (TSLA) Stock Climb Today?",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-12T00:00:00.000-04:00",
					"key": 1528776000000,
					"matching_results": 132,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 52,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "BRITISH COLUMBIA INVESTMENT MANAGEMENT Corp Has $19.20 Million Holdings in Tesla Inc (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-13T00:00:00.000-04:00",
					"key": 1528862400000,
					"matching_results": 144,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 62,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "This startup says it will beat Tesla to putting unmanned semi-trucks on the road: 'I don't think Tesla's in the race' (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-14T00:00:00.000-04:00",
					"key": 1528948800000,
					"matching_results": 83,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 34,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Ex-Tesla employees reveal the cryptic ways they learned they were getting fired (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-15T00:00:00.000-04:00",
					"key": 1529035200000,
					"matching_results": 52,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 23,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Ex-Tesla employees reveal the cryptic ways they learned they were getting fired",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-16T00:00:00.000-04:00",
					"key": 1529121600000,
					"matching_results": 52,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 17,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "-$2.61 EPS Expected for Tesla Inc (TSLA) This Quarter",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-17T00:00:00.000-04:00",
					"key": 1529208000000,
					"matching_results": 50,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "shares",
									"matching_results": 25,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Analysts at Nomura Kept the Same their \"Buy\" rating for Tesla (TSLA) with $450 Target Price per Share; Salem Investment Counselors Trimmed By $1.47 Million Its Lilly Eli & Co (LLY) Position | Norman Observer",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-18T00:00:00.000-04:00",
					"key": 1529294400000,
					"matching_results": 146,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "CEO Elon Musk",
									"matching_results": 65,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "MARKET SNAPSHOT: Dow Futures Fall More Than 100 Points As Trade Worries Persist",
													"matching_results": 8
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-19T00:00:00.000-04:00",
					"key": 1529380800000,
					"matching_results": 149,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 45,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla sinks after Elon Musk says an employee conducted 'sabotage' and Trump ramps up fears of a trade war (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-20T00:00:00.000-04:00",
					"key": 1529467200000,
					"matching_results": 91,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 31,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla is suing the employee Elon Musk claimed committed sabotage against the company (TSLA)",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-21T00:00:00.000-04:00",
					"key": 1529553600000,
					"matching_results": 74,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 29,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla Sues Former Employee For Allegedly Stealing Company Data",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-22T00:00:00.000-04:00",
					"key": 1529640000000,
					"matching_results": 88,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 39,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Companies to watch: UPS, YouTube, Twitter and Tesla [Video]",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-23T00:00:00.000-04:00",
					"key": 1529726400000,
					"matching_results": 62,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 25,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla’s Solar Plans Aren’t Working",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-24T00:00:00.000-04:00",
					"key": 1529812800000,
					"matching_results": 28,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 11,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Capital One National Association Position in Jpmorgan Chase & Co (JPM) Has Upped as Market Value Declined; Tesla (TSLA) Shareholder Beech Hill Advisors Lowered Its Position by $628,292",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-25T00:00:00.000-04:00",
					"key": 1529899200000,
					"matching_results": 53,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "NASDAQ",
									"matching_results": 7,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Criterion Capital Management Holding in Tesla (TSLA) Has Raised by $7.11 Million as Market Value Declined; As Microsoft (MSFT) Share Value Rose, Holder Boltwood Capital Management Has Decreased Holding by $373,555",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-26T00:00:00.000-04:00",
					"key": 1529985600000,
					"matching_results": 70,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Elon Musk",
									"matching_results": 17,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "'You have to move on': Tesla’s biggest bull explains what the rest of Wall Street is missing — and why Elon Musk sets out to fail on purpose (TSLA)",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-27T00:00:00.000-04:00",
					"key": 1530072000000,
					"matching_results": 62,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "CEO Elon Musk",
									"matching_results": 16,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Elon Musk teases Tesla pickup truck in Twitter exchange - MarketWatch",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-28T00:00:00.000-04:00",
					"key": 1530158400000,
					"matching_results": 70,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "CEO Elon Musk",
									"matching_results": 28,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Berenberg Bank Analysts Give Tesla (TSLA) a $500.00 Price Target",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-29T00:00:00.000-04:00",
					"key": 1530244800000,
					"matching_results": 95,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 44,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "How Many Model 3 Cars Did Tesla Deliver in Q2?",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-06-30T00:00:00.000-04:00",
					"key": 1530331200000,
					"matching_results": 38,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 16,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla shares shorted fell in June but not because of a short squeeze, says analyst",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-01T00:00:00.000-04:00",
					"key": 1530417600000,
					"matching_results": 29,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Elon Musk",
									"matching_results": 9,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Does Tesla Stand To Become The World’s Next BMW?",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-02T00:00:00.000-04:00",
					"key": 1530504000000,
					"matching_results": 149,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 66,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla spikes after hitting Model 3 production goal hours after self-imposed deadline (TSLA)",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-03T00:00:00.000-04:00",
					"key": 1530590400000,
					"matching_results": 163,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 60,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Why Tesla, Facebook, and Micron Technology Slumped Today",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-04T00:00:00.000-04:00",
					"key": 1530676800000,
					"matching_results": 54,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 22,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "\"Short-Tempered\" Musk Reportedly \"Snapped\" At Staff Working 12-Hour Shifts In Model 3 \"Production Hell\" Week",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-05T00:00:00.000-04:00",
					"key": 1530763200000,
					"matching_results": 100,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 43,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "California regulators opened another investigation into Tesla's factory (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-06T00:00:00.000-04:00",
					"key": 1530849600000,
					"matching_results": 83,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 29,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Inside the minds of Elon Musk’s fans",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-07T00:00:00.000-04:00",
					"key": 1530936000000,
					"matching_results": 41,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 16,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Could Tesla Pivot Away From the Mass Market?",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-08T00:00:00.000-04:00",
					"key": 1531022400000,
					"matching_results": 30,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 16,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla has not lived up to Elon Musk’s biggest promise yet",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-09T00:00:00.000-04:00",
					"key": 1531108800000,
					"matching_results": 52,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 11,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "A New Problem Emerges For Tesla",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-10T00:00:00.000-04:00",
					"key": 1531195200000,
					"matching_results": 112,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 45,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla (TSLA) Raises Prices in China as Trade Spat Escalates",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-11T00:00:00.000-04:00",
					"key": 1531281600000,
					"matching_results": 92,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 25,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Here's Why Tesla's Plant in China Is Critical",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-12T00:00:00.000-04:00",
					"key": 1531368000000,
					"matching_results": 107,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 53,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "One of Tesla's largest shareholders is urging Elon Musk to simmer down and focus after a tumultuous few weeks (TSLA)",
													"matching_results": 4
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-13T00:00:00.000-04:00",
					"key": 1531454400000,
					"matching_results": 77,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 43,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "NLRB alleges Elon Musk coerced Tesla workers against forming union: report",
													"matching_results": 5
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-14T00:00:00.000-04:00",
					"key": 1531540800000,
					"matching_results": 41,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 20,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "5 New, Must-Read Quotes From Tesla CEO Elon Musk",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-15T00:00:00.000-04:00",
					"key": 1531627200000,
					"matching_results": 50,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 17,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "5 New, Must-Read Quotes From Tesla CEO Elon Musk",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-16T00:00:00.000-04:00",
					"key": 1531713600000,
					"matching_results": 73,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 27,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Amazon shares hit another all-time high [Video]",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-17T00:00:00.000-04:00",
					"key": 1531800000000,
					"matching_results": 45,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 19,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Baillie Gifford & Co. Has $4.52 Billion Stake in Tesla Inc (TSLA)",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-18T00:00:00.000-04:00",
					"key": 1531886400000,
					"matching_results": 53,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Elon Musk",
									"matching_results": 11,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Musk apologizes to British cave diver Vern Unsworth",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-19T00:00:00.000-04:00",
					"key": 1531972800000,
					"matching_results": 120,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 38,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "For Tesla Model 3 buyers, delays could be deal-breakers",
													"matching_results": 3
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-20T00:00:00.000-04:00",
					"key": 1532059200000,
					"matching_results": 88,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 29,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "5 Top Stock Trades for Monday — Buy GE and Microsoft?",
													"matching_results": 2
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-21T00:00:00.000-04:00",
					"key": 1532145600000,
					"matching_results": 66,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 28,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla Earnings: 3 Questions for Elon Musk",
													"matching_results": 5
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-22T00:00:00.000-04:00",
					"key": 1532232000000,
					"matching_results": 45,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Tesla",
									"matching_results": 10,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "8 Retorts To New York Post Attacks On Elon Musk & Tesla — #Pravduh #RealityCheck",
													"matching_results": 1
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-23T00:00:00.000-04:00",
					"key": 1532318400000,
					"matching_results": 147,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "Wall Street Journal",
									"matching_results": 65,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tesla reportedly asked suppliers for a refund as it looks to turn a profit (TSLA)",
													"matching_results": 7
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"key_as_string": "2018-07-24T00:00:00.000-04:00",
					"key": 1532404800000,
					"matching_results": 99,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_text.keywords.text",
							"count": 1,
							"results": [
								{
									"key": "County Republican Party",
									"matching_results": 42,
									"aggregations": [
										{
											"type": "term",
											"field": "title",
											"count": 1,
											"results": [
												{
													"key": "Tennessee Could Be A Bright Spot For Republican Women In 2018",
													"matching_results": 42
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "nested",
			"path": "enriched_title.entities",
			"matching_results": 7794,
			"aggregations": [
				{
					"type": "filter",
					"match": "enriched_title.entities.type:Company",
					"matching_results": 4346,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_title.entities.text",
							"results": [
								{
									"key": "Tesla",
									"matching_results": 1502
								},
								{
									"key": "Tesla Inc",
									"matching_results": 205
								},
								{
									"key": "Tesla, Inc.",
									"matching_results": 158
								},
								{
									"key": "MarketWatch",
									"matching_results": 92
								},
								{
									"key": "TSLA",
									"matching_results": 77
								},
								{
									"key": "Apple",
									"matching_results": 58
								},
								{
									"key": "Amazon",
									"matching_results": 57
								},
								{
									"key": "Facebook",
									"matching_results": 52
								},
								{
									"key": "Twitter",
									"matching_results": 43
								},
								{
									"key": "Netflix",
									"matching_results": 42
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "nested",
			"path": "enriched_title.entities",
			"matching_results": 7794,
			"aggregations": [
				{
					"type": "filter",
					"match": "enriched_title.entities.type:Person",
					"matching_results": 1014,
					"aggregations": [
						{
							"type": "term",
							"field": "enriched_title.entities.text",
							"results": [
								{
									"key": "Elon Musk",
									"matching_results": 510
								},
								{
									"key": "Tesla",
									"matching_results": 62
								},
								{
									"key": "Musk",
									"matching_results": 44
								},
								{
									"key": "Trump",
									"matching_results": 21
								},
								{
									"key": "Dow Jones",
									"matching_results": 18
								},
								{
									"key": "Robert W. Baird",
									"matching_results": 14
								},
								{
									"key": "Jeff Bezos",
									"matching_results": 13
								},
								{
									"key": "Sanford C. Bernstein",
									"matching_results": 11
								},
								{
									"key": "Moody",
									"matching_results": 10
								},
								{
									"key": "Warren Buffett",
									"matching_results": 10
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "term",
			"field": "enriched_title.concepts.text",
			"results": [
				{
					"key": "Elon Musk",
					"matching_results": 631
				},
				{
					"key": "Tesla Motors",
					"matching_results": 477
				},
				{
					"key": "Stock market",
					"matching_results": 225
				},
				{
					"key": "Magnetic field",
					"matching_results": 180
				},
				{
					"key": "Stock",
					"matching_results": 131
				},
				{
					"key": "Dow Jones Industrial Average",
					"matching_results": 103
				},
				{
					"key": "Investment",
					"matching_results": 77
				},
				{
					"key": "International trade",
					"matching_results": 76
				},
				{
					"key": "Trade",
					"matching_results": 71
				},
				{
					"key": "Market",
					"matching_results": 63
				}
			]
		}
	],
	"passages": [],
	"results": [
		{
			"id": "6V7fuZJnNmb2pT2vXUFouMXag6N3AUyH85NThMNJFl2xJVAXdOnzwn96-F8jN0kQ",
			"result_metadata": {
				"score": 18.031248
			},
			"host": "cnbc.com",
			"crawl_date": "2018-06-30T02:55:27Z",
			"title": "The Final Call: TOL & TSLA",
			"url": "https://www.cnbc.com/video/2018/06/29/tol-tsla.html",
			"highlight": {
				"enriched_text.relations.arguments.entities.text": [
					"TOL & <em>TSLA</em> 5 Hours Ago CNBC"
				],
				"enriched_text.relations.sentence": [
					"The Final Call: TOL & <em>TSLA</em> 5 Hours Ago CNBC's Melissa Lee and the Options Action traders discuss the stocks they'll be watching next week, including Toll Brothers and Tesla."
				],
				"enriched_title.keywords.text": [
					"<em>TSLA</em>"
				],
				"text": [
					"The Final Call: TOL & <em>TSLA</em> 5 Hours Ago CNBC's Melissa Lee and the Options Action traders discuss the stocks they'll be watching next week, including Toll Brothers and Tesla."
				],
				"enriched_text.keywords.text": [
					"<em>TSLA</em>"
				],
				"enriched_text.semantic_roles.sentence": [
					"The Final Call: TOL & <em>TSLA</em> 5 Hours Ago CNBC's Melissa Lee and the Options Action traders discuss the stocks they'll be watching next week, including Toll Brothers and Tesla."
				],
				"language": [
					"<em>en</em>"
				],
				"enriched_text.relations.arguments.text": [
					"TOL & <em>TSLA</em> 5 Hours Ago CNBC"
				],
				"title": [
					"The Final Call: TOL & <em>TSLA</em>"
				]
			}
		},
		{
			"id": "17M5AG1cpWHsC31x-yImdzQYWZwmVdZrqRMNdSoVyeN0rmdZNPf2iJcdLPwKjs53",
			"result_metadata": {
				"score": 17.922838
			},
			"host": "hispanicamericans.com",
			"crawl_date": "2018-06-27T12:51:36Z",
			"title": "10 things you need to know before the opening bell SPY SPX QQQ DIA TSLA GE HOG",
			"url": "http://www.hispanicamericans.com/business-news/78995-10-things-you-need-to-know-before-the-opening-bell-spy-spx-qqq-dia-tsla-ge-hog",
			"highlight": {
				"url": [
					"http://www.hispanicamericans.com/business-news/78995-10-things-you-need-to-know-before-the-opening-bell-spy-spx-qqq-dia-<em>tsla</em>-ge-hog"
				],
				"enriched_title.keywords.text": [
					"<em>TSLA</em> GE HOG"
				],
				"text": [
					"advertisement Business 10 things you need to know before the opening bell SPY SPX QQQ DIA <em>TSLA</em> GE HOG Details Financial"
				],
				"enriched_text.keywords.text": [
					"<em>TSLA</em> GE HOG"
				],
				"enriched_text.semantic_roles.sentence": [
					"advertisement Business 10 things you need to know before the opening bell SPY SPX QQQ DIA <em>TSLA</em> GE HOG Details Financial"
				],
				"enriched_title.semantic_roles.sentence": [
					"10 things you need to know before the opening bell SPY SPX QQQ DIA <em>TSLA</em> GE HOG"
				],
				"language": [
					"<em>en</em>"
				],
				"title": [
					"10 things you need to know before the opening bell SPY SPX QQQ DIA <em>TSLA</em> GE HOG"
				]
			}
		},
		{
			"id": "F_DQs8ymDQI3Zzf7ShtTBfg6Na7uU5I1KMUxikknduMucj0DxMnHBUsf6RSRT3ja",
			"result_metadata": {
				"score": 17.863659
			},
			"host": "heraldks.com",
			"crawl_date": "2018-06-27T11:02:13Z",
			"title": "Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (TSLA) as Stock Price Declined",
			"url": "https://heraldks.com/duke-energy-new-com-new-duk-holder-tnb-financial-raised-its-holding-apollo-management-holdings-lp-lowered-its-stake-in-tesla-put-tsla-as-stock-price-declined/",
			"highlight": {
				"enriched_text.relations.arguments.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_text.semantic_roles.subject.text": [
					"<em>TSLA</em>)"
				],
				"enriched_text.relations.sentence": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined June 27, 2018 - By Louis Casey Apollo Management Holdings Lp decreased its stake in Tesla Inc (Put) (<em>TSLA</em>) by 24.24% based on its latest 2018Q1 regulatory filing with the SEC.",
					"Some Historical <em>TSLA</em> News: 23/03/2018 - Facebook loses Tesla and SpaceX over data furore; 21/05/2018 - The hand-wringing over Tesla's ability to generate profits on the Model 3 is overblown, according to Berenberg; 12/04/2018 - TESLA SAID IN STATEMENT IT WITHDREW FROM PROBE OF FATAL CRASH; 09/03/2018 - Elon Musk's $2.6bn compensation package at Tesla opposed by ISS; 02/05/2018 - Tesla Releases First"
				],
				"enriched_title.relations.arguments.text": [
					"<em>TSLA</em>"
				],
				"url": [
					"https://heraldks.com/duke-energy-new-com-new-duk-holder-tnb-financial-raised-its-holding-apollo-management-holdings-lp-lowered-its-stake-in-tesla-put-<em>tsla</em>-as-stock-price-declined/"
				],
				"enriched_title.keywords.text": [
					"<em>TSLA</em>"
				],
				"text": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined\nJune 27, 2018 - By Louis Casey\nApollo Management Holdings Lp decreased its stake in Tesla Inc (Put) (<em>TSLA</em>) by 24.24% based on its latest 2018Q1 regulatory filing with the SEC.",
					"It is negative, as 110 investors sold <em>TSLA</em> shares while 162 reduced holdings. 71 funds opened positions while 178 raised stakes. 100.60 million shares or 4.72% more from 96.06 million shares in 2017Q4 were reported.",
					"Some Historical <em>TSLA</em> News: 23/03/2018 – Facebook loses Tesla and SpaceX over data furore; 21/05/2018 – The hand-wringing over Tesla’s ability to generate profits on the Model 3 is overblown, according to Berenberg; 12/04/2018 – TESLA SAID IN STATEMENT IT WITHDREW FROM PROBE OF FATAL CRASH; 09/03/2018 – Elon Musk’s $2.6bn compensation package at Tesla opposed by ISS; 02/05/2018 – Tesla Releases First"
				],
				"enriched_text.keywords.text": [
					"<em>TSLA</em>",
					"<em>TSLA</em> shares",
					"Historical <em>TSLA</em> News"
				],
				"enriched_text.semantic_roles.sentence": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined"
				],
				"enriched_title.semantic_roles.sentence": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined"
				],
				"language": [
					"<em>en</em>"
				],
				"enriched_title.relations.arguments.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.relations.sentence": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined"
				],
				"enriched_text.relations.arguments.text": [
					"<em>TSLA</em>"
				],
				"external_links": [
					"https://www.zacks.com/stock/quote/<em>TSLA</em>"
				],
				"title": [
					"Duke Energy New Com New (DUK) Holder Tnb Financial Raised Its Holding; Apollo Management Holdings LP Lowered Its Stake in Tesla (Put) (<em>TSLA</em>) as Stock Price Declined"
				],
				"enriched_text.semantic_roles.subject.keywords.text": [
					"<em>TSLA</em>"
				]
			}
		},
		{
			"id": "iesrNWvW0QJ6PeFQorAeudeOb1uXoS5smSq335cfrfZi2mkgjBvFanb_gvdIgx1A",
			"result_metadata": {
				"score": 17.85545
			},
			"host": "investorplace.com",
			"crawl_date": "2018-06-28T15:54:40Z",
			"title": "Are Tesla Short Sellers In for a “Rude Awakening”?",
			"url": "https://investorplace.com/2018/06/are-tesla-short-sellers-in-for-a-rude-awakening/",
			"highlight": {
				"enriched_text.relations.arguments.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_text.semantic_roles.subject.text": [
					"<em>TSLA</em>",
					"<em>TSLA</em> stock"
				],
				"enriched_text.relations.sentence": [
					"<em>TSLA</em> is getting a boost from \"production hell\" by building a second line outside its Fremont factory … in a tent.",
					"<em>TSLA</em> Stock and Musk's Misdirection Musk is already playing misdirection, saying it is \"quite likely\" production of the sedan will hit 5,000-per-week by this week."
				],
				"text": [
					"The founder and CEO of Tesla (NASDAQ: <em>TSLA</em> ) is a genius at misdirection.",
					"In the middle of June, <em>TSLA</em> stock had short interest of over 37 million shares.",
					"There is a tremendous amount of pent-up goodwill in <em>TSLA</em> stock because of its past rise.",
					"The reason <em>TSLA</em> stock is worth nearly $59 billion as trade opens June 28 is its production promises.",
					"<em>TSLA</em> is getting a boost from “production hell” by building a second line outside its Fremont factory … in a tent."
				],
				"enriched_text.keywords.text": [
					"<em>tsla</em> stock"
				],
				"enriched_text.entities.text": [
					"<em>TSLA</em> Stock"
				],
				"enriched_text.semantic_roles.sentence": [
					"In the middle of June, <em>TSLA</em> stock had short interest of over 37 million shares.",
					"The reason <em>TSLA</em> stock is worth nearly $59 billion as trade opens June 28 is its production promises.",
					"<em>TSLA</em> is getting a boost from “production hell” by building a second line outside its Fremont factory … in a tent."
				],
				"language": [
					"<em>en</em>"
				],
				"external_links": [
					"uri=InvestorPlace/Stocks/<em>TSLA</em>",
					"https://www.nasdaq.com/symbol/<em>tsla</em>/short-interest",
					"https://electrek.co/2018/05/07/elon-musk-buys-tesla-<em>tsla</em>-stock-short-squeeze/"
				],
				"enriched_text.semantic_roles.subject.keywords.text": [
					"<em>TSLA</em>",
					"<em>TSLA</em> stock"
				]
			}
		},
		{
			"id": "tLd9uHtzAh26nuimWLcI-nwFSRm1clcfYlgHOvGJSnn-pMB03Gp-OVdZJd3yTrw_",
			"result_metadata": {
				"score": 17.815094
			},
			"host": "onenewspage.com",
			"crawl_date": "2018-06-12T19:35:57Z",
			"title": "Tesla slides after saying it will cut 3,000 jobs (TSLA)",
			"url": "https://www.onenewspage.com/n/Business/1zj8fyoow4/Tesla-slides-after-saying-it-will-cut.htm",
			"highlight": {
				"enriched_text.semantic_roles.object.text": [
					"it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/GpWeEAKPRn 36 minutes ago Other recent news in Business"
				],
				"enriched_text.relations.arguments.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.semantic_roles.object.entities.text": [
					"<em>TSLA</em>"
				],
				"enriched_text.relations.sentence": [
					"slides after saying it will cut 3,000 jobs (<em>TSLA</em>)\" https://t.co/Cr1LjVexW7 34 minutes ago ZeroHourSolutions Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/ttlCgUyOUI 35 minutes ago John Angel Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/xx8pnBqucE johnangel1977 35 minutes ago Finance News Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://"
				],
				"enriched_text.semantic_roles.object.keywords.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.keywords.text": [
					"<em>TSLA</em>"
				],
				"text": [
					"slides after saying it will cut 3,000 jobs (<em>TSLA</em>)\" https://t.co/Cr1LjVexW7 34 minutes ago ZeroHourSolutions Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/ttlCgUyOUI 35 minutes ago John Angel Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/xx8pnBqucE johnangel1977 35 minutes ago Finance News Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co",
					"You Might Like Tweets about this HardTech.tv Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/1m3yf8aHw0 https://t.co/frzRXE0Oa6 29 minutes ago Jazz Drummer Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/JuUeSUXQeJ 33 minutes ago Setforwork Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/wMBA1lttFp 34 minutes ago Haidar Barbouti \"Tesla",
					"Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/GpWeEAKPRn 36 minutes ago Other recent news in Business"
				],
				"enriched_text.keywords.text": [
					"<em>TSLA</em>"
				],
				"enriched_text.semantic_roles.sentence": [
					"Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>) https://t.co/GpWeEAKPRn 36 minutes ago Other recent news in Business"
				],
				"enriched_title.semantic_roles.sentence": [
					"Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>)"
				],
				"language": [
					"<em>en</em>"
				],
				"enriched_text.relations.arguments.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.semantic_roles.object.keywords.text": [
					"<em>TSLA</em>"
				],
				"enriched_title.semantic_roles.object.text": [
					"it will cut 3,000 jobs (<em>TSLA</em>)"
				],
				"title": [
					"Tesla slides after saying it will cut 3,000 jobs (<em>TSLA</em>)"
				]
			}
		}
	],
	"duplicates_removed": 0
}
