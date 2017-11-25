var timetable = function(){

	var d = new Date();
	
	var mesAtual = d.getMonth()+1;
	
	var meses = [];
	
	// holidays padrão Brasil
	
	meses[1] = [];
	meses[1]["holidays"] = [1];
	meses[1]["sundays"] = [];
	meses[1]["total"] = 31;
	
	meses[2] = [];
	meses[2]["holidays"] = [28];
	meses[2]["sundays"] = [];
	meses[2]["total"] = 28;
	
	meses[3] = [];
	meses[3]["holidays"] = [];
	meses[3]["sundays"] = [];
	meses[3]["total"] = 31;
	
	meses[4] = [];
	meses[4]["holidays"] = [14,21];
	meses[4]["sundays"] = [];
	meses[4]["total"] = 30;
	
	meses[5] = [];
	meses[5]["holidays"] = [1];
	meses[5]["sundays"] = [];
	meses[5]["total"] = 31;
	
	meses[6] = [];
	meses[6]["holidays"] = [15];
	meses[6]["sundays"] = [];
	meses[6]["total"] = 30;
	
	meses[7] = [];
	meses[7]["holidays"] = [];
	meses[7]["sundays"] = [];
	meses[7]["total"] = 31;
	
	meses[8] = [];
	meses[8]["holidays"] = [];
	meses[8]["sundays"] = [];
	meses[8]["total"] = 31;
	
	meses[9] = [];
	meses[9]["holidays"] = [7];
	meses[9]["sundays"] = [];
	meses[9]["total"] = 30;
	
	meses[10] = [];
	meses[10]["holidays"] = [12];
	meses[10]["sundays"] = [];
	meses[10]["total"] = 31;
	
	meses[11] = [];
	meses[11]["holidays"] = [2,15];
	meses[11]["sundays"] = [];
	meses[11]["total"] = 30;
	
	meses[12] = [];
	meses[12]["holidays"] = [25];
	meses[12]["sundays"] = [];
	meses[12]["total"] = 31;
	
	
	// preenche os domingos
	hoje = d.getDate();
	//hoje=9;
	dSemana = d.getDay();
	
	dom = hoje - dSemana;
	
	i=0;
	
	do{
	
		
		meses[mesAtual]["sundays"][i]=dom;
		dom-=7;
		i++;
	
	
	}while(dom>0)
	
	dom2=hoje+(7-dSemana);
	
	do {
	
		meses[mesAtual]["sundays"][i]=dom2;
		dom2+=7;
		i++;
	
	}while(dom2<=meses[mesAtual]["total"]);
	
	// fim preenchimento domingos
	
	
	
	

	this.trans = function(){
	
		
		t=hoje;
		
		for(i=0;i<meses[mesAtual]["holidays"].length;i++) {
		
			if(hoje>meses[mesAtual]["holidays"][i])t--;
		
		}
		
		
		for(i=0;i<meses[mesAtual]["sundays"].length;i++) {
		
			if(hoje>meses[mesAtual]["sundays"][i])t--;
		
		}
	
		return t-1;
	
	} /* fim <uteis()> */
	
	this.uteis = function(){
	
		total = meses[mesAtual]["total"];
		f_=meses[mesAtual]["holidays"].length;
		d_=meses[mesAtual]["sundays"].length;
		
		return (total-f_-d_);
	
	} /* fim <uteis()> */
	
	this.total = function(){
	
		return meses[mesAtual]["total"];
	
	} /*fim <total()> */

} /* fim <timetable> */









