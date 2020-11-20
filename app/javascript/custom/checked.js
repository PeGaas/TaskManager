class Stogage {
    constructor(name){
      this.name = name;
      this.hash = {};

      let text = localStorage.getItem(this.name);
      if(text)
        this.hash = JSON.parse(text);

      this.save();
    }

    get(id){
      return this.item.find(item=>item.id===id)
    }

    add(id, data){
      this.hash[id] = data;
      this.save();
    }

    del(id){
      delete this.hash[id];
      this.save();
    }

    save(){
      this.list = Object.values(this.hash);
      const text = JSON.stringify(this.hash);
      localStorage.setItem(this.name, text);
    }

}

$(document).ready(() => {
  const checkbox_store = new Stogage('checkbox_store');
  checkbox_store.list.forEach(item=>{
    if( item.state === "on" )
       return $('#' + item.id).prop('checked', item.state);
    checkbox_store.del(item.id);
  });

  $('body').on('change', '.check', function(event){
    let id = $(this).attr('id');
    let state = event.currentTarget.checked?"on":undefined;
    checkbox_store.add(id, {
      id: id,
      state: state
    });
  });
})
