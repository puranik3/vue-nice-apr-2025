<template>
    <nav class="nav">
        <div>
            <router-link
                class="link"
                active-class="link-active"
                v-for="item of items"
                :key="item.text"
                :to="item.to"
                >{{ item.text }}</router-link
            >
        </div>
        <div>
            <div>
                <span to="#" class="link">Change theme</span>
                <span to="#" class="link">Logout</span>
            </div>
            <!--
      <div>
        <router-link
          :to="{ name: 'login' }"
          class="link"
          active-class="link-active"
          >Login</router-link
        >
      </div>
      -->
        </div>
    </nav>
</template>

<script setup lang="ts">
const items = [
    {
        text: "Home",
        to: {
            name: "home",
        },
    },
    {
        text: "List of workshops",
        to: {
            name: "workshops-list",
        },
    },
];
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 20px;
    background-color: #444;

    > * {
        margin-bottom: 0.25em;
    }

    .link {
        margin: 0 20px;
        text-decoration: none;
        cursor: pointer;

        &.link-active {
            text-decoration: underline;
        }
    }
}
</style>
