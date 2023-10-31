<template>
    <div class="start">
        <div
            class="start__btn"
            @click="showModal = !showModal"
        >
            НАЧАТЬ
        </div>
        <div class="start__list-fields">
            <p>Список отправленных форм</p>
            <ul>
                <li
                    v-for="(item, index) of listFields"
                    :key="index"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    <Modal
        v-show="showModal"
        @close-modal="showModal = false"
        @new-fileds="addFields"
    />
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
    data() {
        return {
            listFields: [],
            showModal: false,
        }
    },

    methods: {
        addFields(fields) {
            this.listFields.push(fields);
        }
    },

    components: {
        Modal 
    },
}
</script>
  
<style>
.start {
    margin: 0 auto;
}

.start__btn {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #7c7d7e;
    width: fit-content;
    margin: 0 auto;
}

.start__btn:hover { 
    cursor: pointer;
}
.start__list-fields {
    margin-top: 10px;
    text-align: center;
}

.start__list-fields p {
    margin-bottom: 10px;
}
</style>
  