<template>
    <div>
        <h2>Add a new session</h2>
        <v-divider class="my-6"></v-divider>

        <form>
            <div class="mb-3">
                <v-text-field
                    label="Sequence ID"
                    type="number"
                    id="sequenceId"
                />
            </div>
            <div class="mb-3">
                <v-text-field label="Name" type="text" id="name" />
            </div>
            <div class="mb-3">
                <v-text-field label="Speaker" type="text" id="speaker" />
            </div>
            <div class="mb-3">
                <v-text-field label="Duration" type="text" id="duration" />
            </div>
            <div class="mb-3">
                <v-select label="Level" id="level"></v-select>
            </div>
            <div class="mb-3">
                <v-textarea label="Abstract" id="abstract"></v-textarea>
            </div>
            <div class="mb-3">
                <v-btn color="primary" type="submit">Add a session</v-btn>
            </div>
        </form>
    </div>
</template>
