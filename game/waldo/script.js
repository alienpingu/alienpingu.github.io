const dict = {
	air: [' '],
	bird: ['','','','','','','','w'],
	sea: ['~'],
	wave: ['~', '.'],
	people: ['P','A','V','N','M',' ', 'o','m'],
	waldo: ['W']
}

class Table {
	constructor(x,y){
    	this.x=x;
      	this.y=y;
      	this.waldo = {
      		placed: false,
      		x: Math.floor(Math.random() * this.x) + 1,
      		y: Math.floor(Math.random() * Math.floor(this.y/6*2)) + 1
      	};
      	this.start = undefined;
      	this.end = undefined;
    }
    timeStart() {
		$('#time').hide();
		$('#time').empty();
    	this.start = new Date();
    }
    timeEnd() {
    	this.end = new Date()
		let diffMs = (this.end - this.start);
		$('#time').append(`<span>${(diffMs/1000)} s</span>`);
		$('#time').show();
		$('.waldo-table').hide();

    }
    cell(y) {
    	let h = ((this.y - y) / (this.y/6));
    	if (h<1) {
			return([dict.air[0], 'air']);
    	} else if(h<2) {
    		return([dict.bird[Math.floor(Math.random() * dict.bird.length)], 'bird']);
    	}else if(h<3) {
    		return([dict.sea[Math.floor(Math.random() * dict.sea.length)], 'sea']);
    	}else if(h<3.5) {
    		return([dict.wave[Math.floor(Math.random() * dict.wave.length)], 'wave']);
    	}else {
			return([dict.people[Math.floor(Math.random() * dict.people.length)], 'people']);
    	}
  	}

  	generateTable() {
  		$('.waldo-table').empty();
  		for (var i = this.y - 1; i >= 0; i--) {
  			$('.waldo-table').append('<tr></tr>');
  			for (var k = this.x - 1; k >= 0; k--) {
  				if (k === this.waldo.x && i === this.waldo.y){
  					$('.waldo-table tr:last').append('<td id="w">'+ dict.waldo[0]+'</td>');
  					this.waldo.placed = true;
					$('#w').on('click', () => this.timeEnd())
  				} else {
  					let c = this.cell(i);
	  				$('.waldo-table tr:last').append(`'<td class="cell-${c[1]}">${c[0]}</td>'`);
  				}
	  		}
  		}
		$('.waldo-table').show();
  		this.timeStart();
  	}
}


