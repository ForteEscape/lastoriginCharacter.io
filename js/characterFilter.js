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
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.B').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.B').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.B').show();
							}
						}
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
			//alert("false");
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
							if(ischecked_brood_ags == true){
								$('.ags.B').show();
								$('.ags.A').show();
								$('.ags.S').show();
								$('.ags.SS').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').show();
							$('.attacker.A').show();
							$('.attacker.S').show();
							$('.attacker.SS').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').show();
							$('.tanker.A').show();
							$('.tanker.S').show();
							$('.tanker.SS').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').show();
							$('.supporter.A').show();
							$('.supporter.S').show();
							$('.supporter.SS').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').show();
						$('.light.A').show();
						$('.light.S').show();
						$('.light.SS').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').show();
						$('.mobile.A').show();
						$('.mobile.S').show();
						$('.mobile.SS').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').show();
						$('.heavy.A').show();
						$('.heavy.S').show();
						$('.heavy.SS').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.B').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.B').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.B').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').hide();
					}
				}
			}
		}
    }//if(rank == B)
	
	if (rank == A) {
        if (ischecked_A == false) {
            ischecked_A = true;
        } else {
            ischecked_A = false;
        }

        if (ischecked_A == true) {
            if (ischecked_B == false && ischecked_S == false && ischecked_SS == false) {
                if (ischecked_lighttype == false &&ischecked_mobiletype == false &&ischecked_heavytype == false) {
                    if (ischecked_attacker == false &&ischecked_tanker == false &&ischecked_supporter == false) {
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.B').hide();
							$('.S').hide();
							$('.SS').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.B').hide();
								$('.ags.S').hide();
								$('.ags.SS').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.B').hide();
								$('.bioroid.S').hide();
								$('.bioroid.SS').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').hide();
							$('.attacker.S').hide();
							$('.attacker.SS').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').hide();
							$('.tanker.S').hide();
							$('.tanker.SS').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').hide();
							$('.supporter.S').hide();
							$('.supporter.SS').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').hide();
						$('.light.S').hide();
						$('.light.SS').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').hide();
						$('.mobile.S').hide();
						$('.mobile.SS').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').hide();
						$('.heavy.S').hide();
						$('.heavy.SS').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.A').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.A').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.A').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.A').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.A').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.A').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.A').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.A').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.A').show();
					}
				}
			}
        }
		else if(ischecked_A == false){
			//alert("false");
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
							if(ischecked_brood_ags == true){
								$('.ags.B').show();
								$('.ags.A').show();
								$('.ags.S').show();
								$('.ags.SS').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').show();
							$('.attacker.A').show();
							$('.attacker.S').show();
							$('.attacker.SS').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').show();
							$('.tanker.A').show();
							$('.tanker.S').show();
							$('.tanker.SS').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').show();
							$('.supporter.A').show();
							$('.supporter.S').show();
							$('.supporter.SS').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').show();
						$('.light.A').show();
						$('.light.S').show();
						$('.light.SS').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').show();
						$('.mobile.A').show();
						$('.mobile.S').show();
						$('.mobile.SS').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').show();
						$('.heavy.A').show();
						$('.heavy.S').show();
						$('.heavy.SS').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.A').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.A').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.A').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.A').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.A').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.A').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.A').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.A').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.A').hide();
					}
				}
			}
		}
    }//if(rank == A)
	
	if (rank == S) {
        if (ischecked_S == false) {
            ischecked_S = true;
        } else {
            ischecked_S = false;
        }

        if (ischecked_S == true) {
            if (ischecked_A == false && ischecked_B == false && ischecked_SS == false) {
                if (ischecked_lighttype == false &&ischecked_mobiletype == false &&ischecked_heavytype == false) {
                    if (ischecked_attacker == false &&ischecked_tanker == false &&ischecked_supporter == false) {
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.A').hide();
							$('.B').hide();
							$('.SS').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.A').hide();
								$('.ags.B').hide();
								$('.ags.SS').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.A').hide();
								$('.bioroid.B').hide();
								$('.bioroid.SS').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.A').hide();
							$('.attacker.B').hide();
							$('.attacker.SS').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.A').hide();
							$('.tanker.B').hide();
							$('.tanker.SS').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.A').hide();
							$('.supporter.B').hide();
							$('.supporter.SS').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.A').hide();
						$('.light.B').hide();
						$('.light.SS').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.A').hide();
						$('.mobile.B').hide();
						$('.mobile.SS').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.A').hide();
						$('.heavy.B').hide();
						$('.heavy.SS').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.S').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.S').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.S').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.S').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.S').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.S').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.S').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.S').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.S').show();
					}
				}
			}
        }
		else if(ischecked_S == false){
			//alert("false");
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
							if(ischecked_brood_ags == true){
								$('.ags.B').show();
								$('.ags.A').show();
								$('.ags.S').show();
								$('.ags.SS').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').show();
							$('.attacker.A').show();
							$('.attacker.S').show();
							$('.attacker.SS').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').show();
							$('.tanker.A').show();
							$('.tanker.S').show();
							$('.tanker.SS').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').show();
							$('.supporter.A').show();
							$('.supporter.S').show();
							$('.supporter.SS').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').show();
						$('.light.A').show();
						$('.light.S').show();
						$('.light.SS').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').show();
						$('.mobile.A').show();
						$('.mobile.S').show();
						$('.mobile.SS').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').show();
						$('.heavy.A').show();
						$('.heavy.S').show();
						$('.heavy.SS').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.S').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.S').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.S').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.S').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.S').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.S').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.S').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.S').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.S').hide();
					}
				}
			}
		}
    }//if(rank == S)
	
	if (rank == SS) {
        if (ischecked_SS == false) {
            ischecked_SS = true;
        } else {
            ischecked_SS = false;
        }

        if (ischecked_SS == true) {
            if (ischecked_A == false && ischecked_B == false && ischecked_S == false) {
                if (ischecked_lighttype == false &&ischecked_mobiletype == false &&ischecked_heavytype == false) {
                    if (ischecked_attacker == false &&ischecked_tanker == false &&ischecked_supporter == false) {
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.A').hide();
							$('.B').hide();
							$('.S').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.A').hide();
								$('.ags.B').hide();
								$('.ags.S').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.A').hide();
								$('.bioroid.B').hide();
								$('.bioroid.S').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.A').hide();
							$('.attacker.B').hide();
							$('.attacker.S').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.A').hide();
							$('.tanker.B').hide();
							$('.tanker.S').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.A').hide();
							$('.supporter.B').hide();
							$('.supporter.S').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.A').hide();
						$('.light.B').hide();
						$('.light.S').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.A').hide();
						$('.mobile.B').hide();
						$('.mobile.S').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.A').hide();
						$('.heavy.B').hide();
						$('.heavy.S').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.SS').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.SS').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.SS').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.SS').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.SS').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.SS').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.SS').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.SS').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.SS').show();
					}
				}
			}
        }
		else if(ischecked_SS == false){
			//alert("false");
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
							if(ischecked_brood_ags == true){
								$('.ags.B').show();
								$('.ags.A').show();
								$('.ags.S').show();
								$('.ags.SS').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.B').show();
							$('.attacker.A').show();
							$('.attacker.S').show();
							$('.attacker.SS').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.B').show();
							$('.tanker.A').show();
							$('.tanker.S').show();
							$('.tanker.SS').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.B').show();
							$('.supporter.A').show();
							$('.supporter.S').show();
							$('.supporter.SS').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.B').show();
						$('.light.A').show();
						$('.light.S').show();
						$('.light.SS').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.B').show();
						$('.mobile.A').show();
						$('.mobile.S').show();
						$('.mobile.SS').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.B').show();
						$('.heavy.A').show();
						$('.heavy.S').show();
						$('.heavy.SS').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.SS').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.SS').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.SS').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.SS').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.SS').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.SS').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.SS').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.SS').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.SS').hide();
					}
				}
			}
		}
    }//if(rank == SS)
}

function searchByCharacterType(type) {
	if(type == light){
		if(ischecked_lighttype == false){
			ischecked_lighttype = true;
		}
		else{
			ischecked_lighttype = false;
		}
		
		if(ischecked_lighttype == true){
			if(ischecked_mobiletype == false && ischecked_heavytype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.mobile').hide();
							$('.heavy').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.mobile').hide();
								$('.bioroid.heavy').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.mobile').hide();
								$('.ags.heavy').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.mobile').hide();
							$('.attacker.heavy').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.mobile').hide();
							$('.tanker.heavy').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.mobile').hide();
							$('.supporter.heavy').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.mobile').hide();
						$('.B.heavy').hide();
					}
					if(ischecked_A == true){
						$('.A.mobile').hide();
						$('.A.heavy').hide();
					}
					if(ischecked_S == true){
						$('.S.mobile').hide();
						$('.S.heavy').hide();
					}
					if(ischecked_SS == true){
						$('.SS.mobile').hide();
						$('.SS.heavy').hide();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').show();
					}
					if(ischecked_A == true){
						$('.A.light').show();
					}
					if(ischecked_S == true){
						$('.S.light').show();
					}
					if(ischecked_SS == true){
						$('.SS.light').show();
					}
				}
			}
		}
		else if(ischecked_lighttype == false){
			if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').show();
							$('.mobile').show();
							$('.heavy').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').show();
								$('.bioroid.mobile').show();
								$('.bioroid.heavy').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').show();
								$('.ags.mobile').show();
								$('.ags.heavy').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').show();
							$('.attacker.mobile').show();
							$('.attacker.heavy').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').show();
							$('.tanker.mobile').show();
							$('.tanker.heavy').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').show();
							$('.supporter.mobile').show();
							$('.supporter.heavy').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').show();
						$('.B.mobile').show();
						$('.B.heavy').show();
					}
					if(ischecked_A == true){
						$('.A.light').show();
						$('.A.mobile').show();
						$('.A.heavy').show();
					}
					if(ischecked_S == true){
						$('.S.light').show();
						$('.S.mobile').show();
						$('.S.heavy').show();
					}
					if(ischecked_SS == true){
						$('.SS.light').show();
						$('.SS.mobile').show();
						$('.SS.heavy').show();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').hide();
					}
					if(ischecked_A == true){
						$('.A.light').hide();
					}
					if(ischecked_S == true){
						$('.S.light').hide();
					}
					if(ischecked_SS == true){
						$('.SS.light').hide();
					}
				}
			}
		}
	}//type == light
	
	if(type == mobile){
		if(ischecked_mobiletype == false){
			ischecked_mobiletype = true;
		}
		else{
			ischecked_mobiletype = false;
		}
		
		if(ischecked_mobiletype == true){
			if(ischecked_lighttype == false && ischecked_heavytype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').hide();
							$('.heavy').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').hide();
								$('.bioroid.heavy').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').hide();
								$('.ags.heavy').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').hide();
							$('.attacker.heavy').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').hide();
							$('.tanker.heavy').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').hide();
							$('.supporter.heavy').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').hide();
						$('.B.heavy').hide();
					}
					if(ischecked_A == true){
						$('.A.light').hide();
						$('.A.heavy').hide();
					}
					if(ischecked_S == true){
						$('.S.light').hide();
						$('.S.heavy').hide();
					}
					if(ischecked_SS == true){
						$('.SS.light').hide();
						$('.SS.heavy').hide();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.mobile').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.mobile').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.mobile').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.mobile').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.mobile').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.mobile').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.mobile').show();
					}
					if(ischecked_A == true){
						$('.A.mobile').show();
					}
					if(ischecked_S == true){
						$('.S.mobile').show();
					}
					if(ischecked_SS == true){
						$('.SS.mobile').show();
					}
				}
			}
		}
		else if(ischecked_mobiletype == false){
			if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').show();
							$('.mobile').show();
							$('.heavy').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').show();
								$('.bioroid.mobile').show();
								$('.bioroid.heavy').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').show();
								$('.ags.mobile').show();
								$('.ags.heavy').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').show();
							$('.attacker.mobile').show();
							$('.attacker.heavy').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').show();
							$('.tanker.mobile').show();
							$('.tanker.heavy').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').show();
							$('.supporter.mobile').show();
							$('.supporter.heavy').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').show();
						$('.B.mobile').show();
						$('.B.heavy').show();
					}
					if(ischecked_A == true){
						$('.A.light').show();
						$('.A.mobile').show();
						$('.A.heavy').show();
					}
					if(ischecked_S == true){
						$('.S.light').show();
						$('.S.mobile').show();
						$('.S.heavy').show();
					}
					if(ischecked_SS == true){
						$('.SS.light').show();
						$('.SS.mobile').show();
						$('.SS.heavy').show();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.mobile').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.mobile').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.mobile').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.mobile').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.mobile').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.mobile').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.mobile').hide();
					}
					if(ischecked_A == true){
						$('.A.mobile').hide();
					}
					if(ischecked_S == true){
						$('.S.mobile').hide();
					}
					if(ischecked_SS == true){
						$('.SS.mobile').hide();
					}
				}
			}
		}
	}//type == mobile
	
	if(type == heavy){
		if(ischecked_heavytype == false){
			ischecked_heavytype = true;
		}
		else{
			ischecked_heavytype = false;
		}
		
		if(ischecked_heavytype == true){
			if(ischecked_mobiletype == false && ischecked_lighttype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.mobile').hide();
							$('.light').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.mobile').hide();
								$('.bioroid.light').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.mobile').hide();
								$('.ags.light').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.mobile').hide();
							$('.attacker.light').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.mobile').hide();
							$('.tanker.light').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.mobile').hide();
							$('.supporter.light').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.mobile').hide();
						$('.B.light').hide();
					}
					if(ischecked_A == true){
						$('.A.mobile').hide();
						$('.A.light').hide();
					}
					if(ischecked_S == true){
						$('.S.mobile').hide();
						$('.S.light').hide();
					}
					if(ischecked_SS == true){
						$('.SS.mobile').hide();
						$('.SS.light').hide();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.heavy').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.heavy').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.heavy').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.heavy').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.heavy').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.heavy').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.heavy').show();
					}
					if(ischecked_A == true){
						$('.A.heavy').show();
					}
					if(ischecked_S == true){
						$('.S.heavy').show();
					}
					if(ischecked_SS == true){
						$('.SS.heavy').show();
					}
				}
			}
		}
		else if(ischecked_heavytype == false){
			if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.light').show();
							$('.mobile').show();
							$('.heavy').show();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.light').show();
								$('.bioroid.mobile').show();
								$('.bioroid.heavy').show();
							}
							if(ischecked_brood_ags == true){
								$('.ags.light').show();
								$('.ags.mobile').show();
								$('.ags.heavy').show();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.light').show();
							$('.attacker.mobile').show();
							$('.attacker.heavy').show();
						}
						if(ischecked_tanker == true){
							$('.tanker.light').show();
							$('.tanker.mobile').show();
							$('.tanker.heavy').show();
						}
						if(ischecked_supporter == true){
							$('.supporter.light').show();
							$('.supporter.mobile').show();
							$('.supporter.heavy').show();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.light').show();
						$('.B.mobile').show();
						$('.B.heavy').show();
					}
					if(ischecked_A == true){
						$('.A.light').show();
						$('.A.mobile').show();
						$('.A.heavy').show();
					}
					if(ischecked_S == true){
						$('.S.light').show();
						$('.S.mobile').show();
						$('.S.heavy').show();
					}
					if(ischecked_SS == true){
						$('.SS.light').show();
						$('.SS.mobile').show();
						$('.SS.heavy').show();
					}
				}
			}
			else{
				if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
					if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.heavy').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.heavy').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.heavy').hide();
							}
						}
					}
					else{
						if(ischecked_attacker == true){
							$('.attacker.heavy').hide();
						}
						if(ischecked_tanker == true){
							$('.tanker.heavy').hide();
						}
						if(ischecked_supporter == true){
							$('.supporter.heavy').hide();
						}
					}
				}
				else{
					if(ischecked_B == true){
						$('.B.heavy').hide();
					}
					if(ischecked_A == true){
						$('.A.heavy').hide();
					}
					if(ischecked_S == true){
						$('.S.heavy').hide();
					}
					if(ischecked_SS == true){
						$('.SS.heavy').hide();
					}
				}
			}
		}
	}//type == heavy
}

function searchByCharacterRole(role) {
	if(role == attacker){
		if(ischecked_attacker == false){
			ischecked_attacker = true;
		}
		else{
			ischecked_attacker == false;
		}
		
		if(ischecked_attacker == true){
			if(ischecked_tanker == false && ischecked_supporter == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.tanker').hide();
							$('.supporter').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.tanker').hide();
								$('.ags.supporter').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.tanker').hide();
								$('.bioroid.supporter').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.tanker').hide();
							$('.B.supporter').hide();
						}
						if(ischecked_A == true){
							$('.A.tanker').hide();
							$('.A.supporter').hide();
						}
						if(ischecked_S == true){
							$('.S.tanker').hide();
							$('.S.supporter').hide();
						}
						if(ischecked_SS == true){
							$('.SS.tanker').hide();
							$('.SS.supporter').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.tanker').hide();
						$('.light.supporter').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.tanker').hide();
						$('.mobile.supporter').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.tanker').hide();
						$('.heavy.supporter').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.attacker').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.attacker').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').show();
						}
						if(ischecked_A == true){
							$('.A.attacker').show();
						}
						if(ischecked_S == true){
							$('.S.attacker').show();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').show();
					}
				}
			}
		}
		else if(ischecked_attacker == false){
			if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.attacker').show();
							$('.tanker').show();
							$('.supporter').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.attacker').show();
								$('.ags.tanker').show();
								$('.ags.supporter').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').show();
								$('.bioroid.tanker').show();
								$('.bioroid.supporter').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').show();
							$('.B.tanker').show();
							$('.B.supporter').show();
						}
						if(ischecked_A == true){
							$('.A.attacker').show();
							$('.A.tanker').show();
							$('.A.supporter').show();
						}
						if(ischecked_S == true){
							$('.S.attacker').show();
							$('.S.tanker').show();
							$('.S.supporter').show();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').show();
							$('.SS.tanker').show();
							$('.SS.supporter').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').show();
						$('.light.tanker').show();
						$('.light.supporter').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').show();
						$('.mobile.tanker').show();
						$('.mobile.supporter').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').show();
						$('.heavy.tanker').show();
						$('.heavy.supporter').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.attacker').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.attacker').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').hide();
						}
						if(ischecked_A == true){
							$('.A.attacker').hide();
						}
						if(ischecked_S == true){
							$('.S.attacker').hide();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').hide();
					}
				}
			}
		}
	}//role == attacker
	
	if(role == tanker){
		if(ischecked_tanker == false){
			ischecked_tanker = true;
		}
		else{
			ischecked_tanker == false;
		}
		
		if(ischecked_tanker == true){
			if(ischecked_attacker == false && ischecked_supporter == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.attacker').hide();
							$('.supporter').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.attacker').hide();
								$('.ags.supporter').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').hide();
								$('.bioroid.supporter').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').hide();
							$('.B.supporter').hide();
						}
						if(ischecked_A == true){
							$('.A.attacker').hide();
							$('.A.supporter').hide();
						}
						if(ischecked_S == true){
							$('.S.attacker').hide();
							$('.S.supporter').hide();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').hide();
							$('.SS.supporter').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').hide();
						$('.light.supporter').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').hide();
						$('.mobile.supporter').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').hide();
						$('.heavy.supporter').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.tanker').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.tanker').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.tanker').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.tanker').show();
						}
						if(ischecked_A == true){
							$('.A.tanker').show();
						}
						if(ischecked_S == true){
							$('.S.tanker').show();
						}
						if(ischecked_SS == true){
							$('.SS.tanker').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.tanker').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.tanker').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.tanker').show();
					}
				}
			}
		}
		else if(ischecked_tanker == false){
			if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.attacker').show();
							$('.tanker').show();
							$('.supporter').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.attacker').show();
								$('.ags.tanker').show();
								$('.ags.supporter').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').show();
								$('.bioroid.tanker').show();
								$('.bioroid.supporter').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').show();
							$('.B.tanker').show();
							$('.B.supporter').show();
						}
						if(ischecked_A == true){
							$('.A.attacker').show();
							$('.A.tanker').show();
							$('.A.supporter').show();
						}
						if(ischecked_S == true){
							$('.S.attacker').show();
							$('.S.tanker').show();
							$('.S.supporter').show();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').show();
							$('.SS.tanker').show();
							$('.SS.supporter').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').show();
						$('.light.tanker').show();
						$('.light.supporter').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').show();
						$('.mobile.tanker').show();
						$('.mobile.supporter').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').show();
						$('.heavy.tanker').show();
						$('.heavy.supporter').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.tanker').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.tanker').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.tanker').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.tanker').hide();
						}
						if(ischecked_A == true){
							$('.A.tanker').hide();
						}
						if(ischecked_S == true){
							$('.S.tanker').hide();
						}
						if(ischecked_SS == true){
							$('.SS.tanker').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.tanker').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.tanker').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.tanker').hide();
					}
				}
			}
		}
	}//role == tanker
	
	if(role == supporter){
		if(ischecked_supporter == false){
			ischecked_supporter = true;
		}
		else{
			ischecked_supporter == false;
		}
		
		if(ischecked_supporter == true){
			if(ischecked_tanker == false && ischecked_attacker == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.tanker').hide();
							$('.attacker').hide();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.tanker').hide();
								$('.ags.attacker').hide();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.tanker').hide();
								$('.bioroid.attacker').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.tanker').hide();
							$('.B.attacker').hide();
						}
						if(ischecked_A == true){
							$('.A.tanker').hide();
							$('.A.attacker').hide();
						}
						if(ischecked_S == true){
							$('.S.tanker').hide();
							$('.S.attacker').hide();
						}
						if(ischecked_SS == true){
							$('.SS.tanker').hide();
							$('.SS.attacker').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.tanker').hide();
						$('.light.attacker').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.tanker').hide();
						$('.mobile.attacker').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.tanker').hide();
						$('.heavy.attacker').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
							$('.supporter').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.supporter').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.supporter').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.supporter').show();
						}
						if(ischecked_A == true){
							$('.A.supporter').show();
						}
						if(ischecked_S == true){
							$('.S.supporter').show();
						}
						if(ischecked_SS == true){
							$('.SS.supporter').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.supporter').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.supporter').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.supporter').show();
					}
				}
			}
		}
		else if(ischecked_supporter == false){
			if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.attacker').show();
							$('.tanker').show();
							$('.supporter').show();
						}
						else{
							if(ischecked_brood_ags == true){
								$('.ags.attacker').show();
								$('.ags.tanker').show();
								$('.ags.supporter').show();
							}
							if(ischecked_brood_bioroid == true){
								$('.bioroid.attacker').show();
								$('.bioroid.tanker').show();
								$('.bioroid.supporter').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.attacker').show();
							$('.B.tanker').show();
							$('.B.supporter').show();
						}
						if(ischecked_A == true){
							$('.A.attacker').show();
							$('.A.tanker').show();
							$('.A.supporter').show();
						}
						if(ischecked_S == true){
							$('.S.attacker').show();
							$('.S.tanker').show();
							$('.S.supporter').show();
						}
						if(ischecked_SS == true){
							$('.SS.attacker').show();
							$('.SS.tanker').show();
							$('.SS.supporter').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.attacker').show();
						$('.light.tanker').show();
						$('.light.supporter').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.attacker').show();
						$('.mobile.tanker').show();
						$('.mobile.supporter').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.attacker').show();
						$('.heavy.tanker').show();
						$('.heavy.supporter').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_brood_ags == false && ischecked_brood_bioroid == false){
							$('.supporter').hide();
						}
						else{
							if(ischecked_brood_bioroid == true){
								$('.bioroid.supporter').hide();
							}
							if(ischecked_brood_ags == true){
								$('.ags.supporter').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.supporter').hide();
						}
						if(ischecked_A == true){
							$('.A.supporter').hide();
						}
						if(ischecked_S == true){
							$('.S.supporter').hide();
						}
						if(ischecked_SS == true){
							$('.SS.supporter').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.supporter').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.supporter').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.supporter').hide();
					}
				}
			}
		}
	}//role == supporter
}

function searchByCharacterBrood(brood) {
	if(brood == bioroid){
		if(ischecked_brood_bioroid == false){
			ischecked_brood_bioroid = true;
		}
		else{
			ischecked_brood_bioroid = false;
		}
		
		if(ischecked_brood_bioroid == true){
			if(ischecked_brood_ags == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.ags').hide();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.ags').hide();
							}
							if(ischecked_tanker == true){
								$('.tanker.ags').hide();
							}
							if(ischecked_supporter == true){
								$('.supporter.ags').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.ags').hide();
						}
						if(ischecked_A == true){
							$('.A.ags').hide();
						}
						if(ischecked_S == true){
							$('.S.ags').hide();
						}
						if(ischecked_SS == true){
							$('.SS.ags').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.ags').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.ags').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.ags').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.bioroid').show();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.bioroid').show();
							}
							if(ischecked_tanker == true){
								$('.tanker.bioroid').show();
							}
							if(ischecked_supporter == true){
								$('.supporter.bioroid').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.bioroid').show();
						}
						if(ischecked_S == true){
							$('.S.bioroid').show();
						}
						if(ischecked_A == true){
							$('.A.bioroid').show();
						}
						if(ischecked_SS == true){
							$('.SS.bioroid').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.bioroid').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.bioroid').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.bioroid').show();
					}
				}
			}
		}
		else if(ischecked_brood_bioroid == false){
			if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.bioroid').show();
							$('.ags').show();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.bioroid').show();
								$('.attacker.ags').show();
							}
							if(ischecked_tanker == true){
								$('.tanker.bioroid').show();
								$('.tanker.ags').show();
							}
							if(ischecked_supporter == true){
								$('.supporter.bioroid').show();
								$('.supporter.ags').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.bioroid').show();
							$('.B.ags').show();
						}
						if(ischecked_A == true){
							$('.A.bioroid').show();
							$('.A.ags').show();
						}
						if(ischecked_S == true){
							$('.S.bioroid').show();
							$('.S.ags').show();
						}
						if(ischecked_SS == true){
							$('.SS.bioroid').show();
							$('.SS.ags').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.bioroid').show();
						$('.light.ags').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.bioroid').show();
						$('.mobile.ags').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.bioroid').show();
						$('.heavy.ags').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.bioroid').hide();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.bioroid').hide();
							}
							if(ischecked_tanker == true){
								$('.tanker.bioroid').hide();
							}
							if(ischecked_supporter == true){
								$('.supporter.bioroid').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.bioroid').hide();
						}
						if(ischecked_A == true){
							$('.A.bioroid').hide();
						}
						if(ischecked_S == true){
							$('.S.bioroid').hide();
						}
						if(ischecked_SS == true){
							$('.SS.bioroid').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.bioroid').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.bioroid').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.bioroid').hide();
					}
				}
			}
		}
	}//brood == bioroid
	
	if(brood == ags){
		if(ischecked_brood_ags == false){
			ischecked_brood_ags = true;
		}
		else{
			ischecked_brood_ags = false;
		}
		
		if(ischecked_brood_ags == true){
			if(ischecked_brood_bioroid == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.bioroid').hide();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.bioroid').hide();
							}
							if(ischecked_tanker == true){
								$('.tanker.bioroid').hide();
							}
							if(ischecked_supporter == true){
								$('.supporter.bioroid').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.bioroid').hide();
						}
						if(ischecked_A == true){
							$('.A.bioroid').hide();
						}
						if(ischecked_S == true){
							$('.S.bioroid').hide();
						}
						if(ischecked_SS == true){
							$('.SS.bioroid').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.bioroid').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.bioroid').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.bioroid').hide();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.ags').show();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.ags').show();
							}
							if(ischecked_tanker == true){
								$('.tanker.ags').show();
							}
							if(ischecked_supporter == true){
								$('.supporter.ags').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.ags').show();
						}
						if(ischecked_S == true){
							$('.S.ags').show();
						}
						if(ischecked_A == true){
							$('.A.ags').show();
						}
						if(ischecked_SS == true){
							$('.SS.ags').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.ags').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.ags').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.ags').show();
					}
				}
			}
		}
		else if(ischecked_brood_ags == false){
			if(ischecked_brood_bioroid == false && ischecked_brood_ags == false){
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.bioroid').show();
							$('.ags').show();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.bioroid').show();
								$('.attacker.ags').show();
							}
							if(ischecked_tanker == true){
								$('.tanker.bioroid').show();
								$('.tanker.ags').show();
							}
							if(ischecked_supporter == true){
								$('.supporter.bioroid').show();
								$('.supporter.ags').show();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.bioroid').show();
							$('.B.ags').show();
						}
						if(ischecked_A == true){
							$('.A.bioroid').show();
							$('.A.ags').show();
						}
						if(ischecked_S == true){
							$('.S.bioroid').show();
							$('.S.ags').show();
						}
						if(ischecked_SS == true){
							$('.SS.bioroid').show();
							$('.SS.ags').show();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.bioroid').show();
						$('.light.ags').show();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.bioroid').show();
						$('.mobile.ags').show();
					}
					if(ischecked_heavytype == true){
						$('.heavy.bioroid').show();
						$('.heavy.ags').show();
					}
				}
			}
			else{
				if(ischecked_lighttype == false && ischecked_mobiletype == false && ischecked_heavytype == false){
					if(ischecked_B == false && ischecked_A == false && ischecked_S == false && ischecked_SS == false){
						if(ischecked_attacker == false && ischecked_tanker == false && ischecked_supporter == false){
							$('.ags').hide();
						}
						else{
							if(ischecked_attacker == true){
								$('.attacker.ags').hide();
							}
							if(ischecked_tanker == true){
								$('.tanker.ags').hide();
							}
							if(ischecked_supporter == true){
								$('.supporter.ags').hide();
							}
						}
					}
					else{
						if(ischecked_B == true){
							$('.B.ags').hide();
						}
						if(ischecked_A == true){
							$('.A.ags').hide();
						}
						if(ischecked_S == true){
							$('.S.ags').hide();
						}
						if(ischecked_SS == true){
							$('.SS.ags').hide();
						}
					}
				}
				else{
					if(ischecked_lighttype == true){
						$('.light.ags').hide();
					}
					if(ischecked_mobiletype == true){
						$('.mobile.ags').hide();
					}
					if(ischecked_heavytype == true){
						$('.heavy.ags').hide();
					}
				}
			}
		}
	}//brood == ags
}