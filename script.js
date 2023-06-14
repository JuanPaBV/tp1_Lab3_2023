const app = Vue.createApp({
    data() {
        return {
            usuario: '',
            image: './imagenes/publicacion.jpg',
            likes: 200,
            comentarios: [],
        }
    },
    methods: {
        meGusta() {
            if (this.likes === 200) this.likes += 1;
            else this.likes -= 1;
        },
        agregarComentario(comentario) {
            this.comentarios.push(comentario);
        },
    }
})