var ischecked_B = false;
var ischecked_A = false;
var ischecked_S = false;
var ischecked_SS = false;

var ischecked_lighttype = false;
var ischecked_mobiletype = false;
var ischecked_heavytype = false;

var ischecked_attacker = false;
var ischecked_supporter = false;
var ischecked_tanker = false;

var ischecked_skin_injured = false;
var ischecked_skin_live2d = false;

var ischecked_brood_bioroid = false;
var ischecked_brood_ags = false;

function searchByCharacterRank(rank) {
    if (rank == B) {
        if (ischecked_B == false) {
            ischecked_B = true;
        } else {
            ischecked_B = false;
        }

        if (ischecked_B == true) {
            if (ischecked_A == false && ischecked_S == false && ischecked_SS == false) {
                if (ischecked_lighttype == false &&ischecked_mobiletype == false &&ischecked_heavytype == false) {
                    if (ischecked_attacker == false &&ischecked_tanker == false &&ischecked_supporter == false) {
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.A').hide();
							$('.S').hide();
							$('.SS').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.A').hide();
								$('.ags.S').hide();
								$('.ags.SS').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.A').hide();
								$('.bioroid.S').hide();
								$('.bioroid.SS').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.A').hide();
							$('.attacker.S').hide();
							$('.attacker.SS').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.A').hide();
							$('.tanker.S').hide();
							$('.tanker.SS').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.A').hide();
							$('.supporter.S').hide();
							$('.supporter.SS').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.A').hide();
						$('.light.S').hide();
						$('.light.SS').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.A').hide();
						$('.mobile.S').hide();
						$('.mobile.SS').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.A').hide();
						$('.heavy.S').hide();
						$('.heavy.SS').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						$('.B').show();
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').show();
					}
				}
			}
        }
		else if(ischecked_B == false){
			alert("false");
			if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.B').show();
							$('.A').show();
							$('.S').show();
							$('.SS').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.B').show();
								$('.bioroid.A').show();
								$('.bioroid.S').show();
								$('.bioroid.SS').show();
							}
						}
					}
				}
			}
		}
    }//if(rank == B)
}//function()

function searchByCharacterType(type) {}

function searchByCharacterRole(role) {}

function searchByCharacterBrood(brood) {}