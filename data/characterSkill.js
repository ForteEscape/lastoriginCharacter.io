var characterSkillDataArr=[
	{
		"name" : "miho",
		"img": "Miho_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "바보 아냐?",
				"img": "Shot",
				"range": "4",
				"AP": "3",
				"description": "저격으로 <span id='mihoaskillpower1'></span> 피해를 줍니다. 표적이나 도발 또는 표식 상태면 추가피해를 줍니다(30%).",
				"areadata": [5]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "마무리 저격",
				"img": "Shot",
				"range": "4",
				"AP": "3",
				"description": "저격으로 <span id='mihoaskillpower2'></span> 보호무시 피해를 줍니다. 대상의 HP가 낮을수록 피해량이 증가합니다(50%).",
				"areadata": [5]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "전위 지원",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "전투 개시 시, 자기 앞에 있는 보호기의 AP를 <span id='mihoaskillpower3'></span> 만큼 증가시키고 대상의 공격지원을 합니다.",
				"areadata": [5]
			}
		]
	},
	{
		"name" : "beasthunter",
		"img": "BeastHunter_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "157mm HEAT탄",
				"img": "Shot",
				"range": "5",
				"AP": "7",
				"description": "단일대상에게 높은 피해를 줍니다(2배+레벨당 0.1배). 대상의 방어력의 일정 비율을 무시하며(30%), 보호기이면 추가 피해를 줍니다.(20%)",
				"areadata": [5]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "유산탄 포격",
				"img": "Shot",
				"range": "4",
				"AP": "8",
				"description": "목표대상에게 피해를 주고(1.25배+레벨당 약0.063배) 뒤의 대상들에게는 25% 감소된 피해를 줍니다. 일정확률로 피해감소 효과를 해제합니다.",
				"areadata": [5, 3, 6, 9]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "사냥 개시",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "적 처치시 다음 공격의 공격력이 (25%+레벨당 1%)증가합니다.",
				"areadata": [5]
			},
			{
				"title": "pskill2",
				"type": "passive",
				"name": "제압포격",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "공격력 증가 상태로 공격 시 일정 확률로 방어막과 피해 감소 효과를 무시합니다. 숙련도가 높을수록 확률이 증가합니다.",
				"areadata": [5]
			}
		]
	}
]; 