<template>
    <div class="modal" @click="closeModal">
        <form
            class="modal__form"
            name="form"
            ref="form"
            @submit.prevent="sendingFields"
        >
            <div class="modal__field">
                <label for="modal__name">Введите имя</label>
                <input  required type="text" name="nameUser" id="modal__name">
            </div>
            <div class="modal__field">
                <label for="modal__surname">Введите фамилию</label>
                <input required type="text" name="surnameUser" id="modal__surname">
            </div>
            <div class="modal__field">
                <label for="modal__hobby">Введите ваше хобби</label>
                <input required type="text" name="hobby" id="modal__hobby">
            </div>
            <div class="modal__field">
                <label for="modal__job">Где вы работаете</label>
                <input required type="text" name="job" id="modal__job">
            </div>
            <div class="modal__field">
                <label for="modal__city">Город проживания</label>
                <input required type="text" name="city" id="modal__city">
            </div>

            <button
                type="submit"
                class="modal__btn"
            >
                Отправить
            </button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    emits: ['closeModal', 'newFileds'],

    methods: {
        sendingFields(event) {
            const allInput = new FormData(event.target).entries();
            this.$emit('newFileds', JSON.stringify(Array.from(allInput)));
            this.$emit('closeModal');
            this.$refs.form.reset();
        },

        closeModal(event) {
            if (!event.target.closest('.modal__form')) this.$emit('closeModal');
        }
    }
}
</script>

<style>

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.modal__form {
    max-width: 500px;
    background: #4e575a;
    border-radius: 10px;
    padding: 10px;
}

.modal__field {
    display: flex;
    column-gap: 10px;
    justify-content: space-between;
}

.modal__field:not(:last-child) {
    margin-bottom: 15px;
}

.modal__field input {
    border-bottom: 1px solid rgb(46, 43, 43);
}

.modal__btn {
    background-color: rgb(153, 153, 153);
    padding: 5px 10px;
    border-radius: 5px;
}

@media(max-width: 375px) {
    .modal__field {
        flex-direction: column;
    }
}
</style>
  