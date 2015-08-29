$package('jeecg.hpMedicine');
jeecg.hpMedicine = function(){
	var _box = null;
	var _this = {
		config:{
			event:{
				add:function(){
					$('#typeIds_combobox').combobox('reload');
					_box.handler.add();
				},
				edit:function(){
					$('#typeIds_combobox').combobox('reload');
					_box.handler.edit();
				}
			},
  			dataGrid:{
  				title:'药品',
	   			url:'dataList.do',
	   			columns:[[
					{field:'id',checkbox:true},
					{field:'name_seo',title:'药品名',align:'center',sortable:true,
							formatter:function(value,row,index){
								return row.name_seo;
							}
						},
					{field:'unit',title:'单位',align:'center',sortable:true,
							formatter:function(value,row,index){
								return row.unit;
							}
						},
					{field:'engname',title:'英文名',align:'center',sortable:true,
							formatter:function(value,row,index){
								return row.engname;
							}
						},
					]]
			}
		},
		init:function(){
			_box = new YDataGrid(_this.config); 
			_box.init();
		}
	}
	return _this;
}();

$(function(){
	jeecg.hpMedicine.init();
});