app.component('seccion-comentarios', {
    props: {
        usuario: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <form action="comentar" @submit.prevent="onSubmit">
        <input id="cajaComentarios" v-model="comentario" type="text" placeholder="Deja tu comentario..."></input>
        <button id="btnComentar" @click="cargarComentario" style="float: right;">Comentar</button>
    </form>
    <p id="errorUsuario" class="error" v-if="errorUsuario">Error: El usuario ingresado no cumple con los requisitos</p>
    <p id="errorComentario" class="error" v-if="errorComentario">Error: El comentario ingresado no cumple con los requisitos</p>
    `,
    data() {
        return {
            comentario: '',
            errorUsuario: false,
            errorComentario: false
        }
    },
    methods: {
        cargarComentario() {
            let comentarioPublicacion = {
                usuario: this.usuario,
                comentario: this.comentario
            }

            if (this.usuario.trim() === '' && this.comentario.trim() === '') {
                this.errorUsuario = true
                this.errorComentario = true
            }
            else if (this.usuario.trim() === '') {
                this.errorUsuario = true
                this.errorComentario = false
            }
            else if (this.comentario.trim() === '') {
                this.errorComentario = true
                this.errorUsuario = false
            }
            else {
                this.$emit('comentario-enviado', comentarioPublicacion)
                this.errorComentario = false
                this.errorUsuario = false
            }
            
        this.usuario = ''
        this.comentario= ''  
        }
    }
})