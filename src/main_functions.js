	var last_stop = 0;
	var last_scroll = 0;
	var scroll = 0;
	var wasUp = false;
	
	$(window).scroll(function (event) {
		last_scroll = scroll;
		scroll = $(window).scrollTop();
		var add_section_height = $("#add_section").outerHeight();
		if(scroll>last_scroll){
			if(wasUp){
				last_stop = scroll;
				wasUp=false;
			}
			var destination = (last_stop+add_section_height>scroll)?(last_stop):(scroll-add_section_height);
			$("#add_section").css("top",destination+"px");
			$("#map_view").css("top",destination+"px");
		}else{
			if(!wasUp){
				last_stop = scroll;
				wasUp=true;
			}
			var destination = scroll<last_stop-add_section_height?scroll:(last_stop-add_section_height);
			$("#add_section").css("top",destination+"px");
			$("#map_view").css("top",destination+"px");

		}

	});

	function showAddSection(){
		var des = {};
		des["top"]=scroll;
		wasUp = true;
		last_stop = scroll+$("#add_section").outerHeight();
		last_scroll = scroll;
		$("#add_section").animate(des,200);
		$("#map_view").animate(des,500);

	}