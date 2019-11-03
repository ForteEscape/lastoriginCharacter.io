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
	},
	{
		"name" : "valkyrie",
		"img": "Valkyrie_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "교란사격",
				"img": "Shot",
				"range": "4",
				"AP": "4",
				"description": "단일대상에게 보통 피해를 줍니다(1배). 2라운드간 위장상태가 되어서 회피율이 증가합니다.(35% + 레벨당 +5%)",
				"areadata": [5]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "정밀사격",
				"img": "Shot",
				"range": "4",
				"AP": "7",
				"description": "보호 효과를 무시하고 단일 대상에게 높은 피해를 줍니다(1.6배). 공격이 치명타인 경우 추가피해를 줍니다(30%).",
				"areadata": [5]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "핀포인트 저격",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "자신이 적 진영에 가까울수록 공격력(25%)과 치명타(20%)가 증가합니다. 중열에는 해당 효과의 절반이 적용되며 후열에는 비활성화 됩니다,",
				"areadata": [5]
			},
			{
				"title": "pskill2",
				"type": "passive",
				"name": "하얀 사신",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "위장상태일 때 적에게 공격을 받으면 받는 피해가 줄어들고(-15% 레벨당 1% 추가 경감) 반격합니다.(80% + 레벨당 5%의 위력)",
				"areadata": [5]
			}
		]
	},
	{
		"name" : "may",
		"img": "May_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "융단 폭격",
				"img": "Shot",
				"range": "5",
				"AP": "9",
				"description": "융단 폭격으로 지정된 범위에 보통 피해를 줍니다(1.2배 + 레벨당 0.09배). 대상이 이동 불가나 표식 상태이면 피해량이 증가합니다.(30% + 레벨당 1.5%) 해당 스킬 피해는 방어관통(30% + 레벨당 4%) 피해가 적용됩니다.",
				"areadata": [4, 5, 6]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "석기 시대로!",
				"img": "Shot",
				"range": "6",
				"AP": "10",
				"description": "1라운드 후 착탄하는 ALCM을 발사해 지정 범위에 매우 높은 방어관통(30% + 레벨당 4%) 피해를 주고(2.4배 + 레벨당 0.12배), 지속 화염 피해를 입는 점화 상태로 만듭니다.(점화 피해는 40 + 레벨당 30) 목표 지점 밖으로 갈 수록 피해량이 25%씩 감소합니다. 대상이 이동 불가나 표식 상태이면 피해량이 증가합니다.(30%)",
				"areadata": [1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "폭격 편대 지휘",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "라운드 개시 시 주변의 기동형 아군을 지휘해 대상의 공격력(20% + 레벨당 1%)과 치명타(10% + 레벨당 0.5%)가 증가합니다.",
				"areadata": [1, 2, 3, 4, 6, 7, 8, 9]
			},
			{
				"title": "pskill2",
				"type": "passive",
				"name": "불꽃 놀이광",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "적이 처치될 경우, 폭발하는 모습에 영감을 얻어 공격력이(4% + 레벨당 0.25%) 증가하고 행동력이(2% + 레벨당 0.1%) 증가합니다. 해당 효과는 중첩됩니다.",
				"areadata": [5]
			},
			{
				"title": "pskill3",
				"type": "passive",
				"name": "길동무 모집?!",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "자신이 전투불능이 될 경우 ALCM이 유폭해 주변 아군에게 강력한 피해(500% + 레벨당 +25%)를 줍니다. 스킬 숙련도가 높을 수록 유폭 확률이 감소합니다. 유폭 범위 내의 아군은 메이의 체력에 따라 버프를 받습니다. 체력 50% 이하시 행동력(10% + 레벨당 0.5%) 증가, 25% 이하시 추가로 행동력(+1 + 레벨당 0.1) 증가",
				"areadata": [1, 2, 3, 4, 6, 7, 8, 9]
			}
		]
	},
	{
		"name" : "phoenix",
		"img": "Phoenix_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "정밀 포격",
				"img": "Shot",
				"range": "4",
				"AP": "7",
				"description": "단일대상에게 정밀 포격으로 높은 피해를 줍니다(1.6배). 보호 효과를 무시하며 대상이 표식 상태이면 피해량(+20%)이 증가합니다.",
				"areadata": [5]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "포격 난사",
				"img": "Shot",
				"range": "3",
				"AP": "9",
				"description": "지정 범위에 포격을 난사해 피해를 줍니다(1배). 대상이 회피 감소 상태이거나(+20%) 이동 불가 상태(+20%)이면 피해량이 증가합니다.",
				"areadata": [5, 6, 8, 9]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "공중 포격 지원",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "공격 후 피닉스의 앞 열에 있는 경장형에게는 1턴, 중장형 아군에게는 2턴 동안 지원 공격을 실시합니다. 라운드 개시 시 지정대상 보호를 받는 상태이면 AP가 증가합니다.",
				"areadata": [3, 6, 9]
			},
			{
				"title": "pskill2",
				"type": "passive",
				"name": "숙련된 조준",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "적중(25% + 레벨당 3%)과 치명타(5% + 레벨당 0.5% 단 9에서 10레벨 증가량은 5%) 방어 관통(25% + 레벨당 3%)이 증가합니다",
				"areadata": [5]
			}
		]
	},
	{
		"name" : "gigantes",
		"img": "Gigantes_basic",
		"skills":[
			{
				"title": "askill1",
				"type": "active",
				"name": "로켓 배쉬",
				"img": "Shot",
				"range": "1",
				"AP": "10",
				"description": "단일 대상을 강타해 피해(250% + 레벨당 10%)를 주고 낮은 확률로 대상을 해당 라운드 동안 행동불가 상태로 만듭니다. 치명타 시 행동불가 확률이 더 높아집니다.",
				"areadata": [5]
			},
			{
				"title": "askill2",
				"type": "active",
				"name": "쉴드 차지",
				"img": "Shot",
				"range": "2",
				"AP": "9",
				"description": "단일 대상에게 돌진해 피해(200% + 레벨당 10%)를 주고 뒤로 1칸 밀며 대상에게 걸린 행, 열 보호 효과를 해제합니다.",
				"areadata": [5]
			},
			{
				"title": "pskill1",
				"type": "passive",
				"name": "거점 방어 모드",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "라운드 개시 시 방어력(75% + 레벨당 3.75%)이 증가하며 행, 열 보호가 활성화 됩니다. 공격 시 2라운드 동안 효과저항(30% + 레벨당 1.5%) 증가, 받는 피해 감소(20% + 레벨당 1.5%) 효과가 활성화됩니다.",
				"areadata": [3, 4, 5, 6, 9]
			},
			{
				"title": "pskill2",
				"type": "passive",
				"name": "정밀 포착",
				"img": "SelfAtkBuff",
				"range": "0",
				"AP": "0",
				"description": "라운드 개시 시 사거리 증가 효과 상태이면 해당 효과를 해제하고 2라운드 동안 공격력(20% + 레벨당 1%)/치명타(10% + 레벨당 0.5%)/적중(50% + 레벨당 5%) 이 증가합니다. ",
				"areadata": [5]
			}
		]
	}
]; 