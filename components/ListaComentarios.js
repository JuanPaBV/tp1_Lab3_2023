app.component('lista-comentarios', {
    props: {
        comentarios: {
            type: Array,
            required: true
        },
        usuario: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div v-for="comentario in comentarios" :key="comentario">
        <h4>{{ comentario.usuario }}</h4>
        <span>{{ comentario.comentario }}</span>
        <button id="btnEliminar" @click="eliminar(comentario, usuario)" style="float: right;">Eliminar</button>
        <br>
    </div>
    `,
    methods: {
        eliminar(comentario, usuario) {
            if(comentario.usuario === usuario) {
                this.comentarios.splice(comentario, 1);
            }
            else alert("burro")
        }
    }
})