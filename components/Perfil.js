app.component('perfil', {
    template:
    /*html*/
    `
        <div class="perfil">
            <img src=" imagenes/fotoPerfil.jpg" alt="Foto de perfil">
            <div id="perfil-informacion">
            <h1>{{ persona }}</h1>
            <br>
            <p><strong>Email: </strong>{{ email }}</p>
            <br>
            <p><strong>Fecha de nacimiento: </strong>{{ fechaNacimiento }}</p>
            <br>
            <p><strong>Telefono: </strong>{{ telefono }}</p>
            <br>
            <p><strong>Ciudad: </strong>{{ ciudad }}</p>
            <br>
            <p>Trabajando en <strong>{{ trabajo }}</strong></p>
            </div>
            <button id="btn_seguir" @click="seguir">{{ btnSeguir }}</button>
        </div>
    `,
    data() {
        return {
            persona: 'Jane Doe',
            email: 'jane_doe@email.com',
            fechaNacimiento: '01/05/1996',
            telefono: '918-936-9585',
            ciudad: 'Tokio,Japón',
            trabajo: 'Lawn N',
            btnSeguir: 'Seguir'
        }
    },
    methods: {
        seguir() {
            if(this.btnSeguir === 'Seguir') 
            this.btnSeguir = 'Dejar de seguir'
            else this.btnSeguir = 'Seguir'
        }
    }
})