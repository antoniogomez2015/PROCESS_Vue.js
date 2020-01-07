const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Aplicación con VueJs',
        frutas: [
            {nombre: "Manzanas", cantidad: 10},
            {nombre: "Peras", cantidad: 2},
            {nombre: "Cambures", cantidad: 0}
        ],
        newElement: "",
        total: 0,
        CSSbg: 'bg-warning',
        colorText: 'inf'
    },   
    methods: {
        addEl(){
            this.frutas.push({
                nombre: this.newElement, cantidad: 0               
            });
            return this.newElement = ""           
        }
    },
    computed: {
        calcule(){
            this.total = 0;
            for(el of this.frutas){
                this.total = this.total + el.cantidad;
            };
            return this.total;
        }
    }

})





