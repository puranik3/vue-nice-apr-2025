<template>
    <!-- mobile version -->
    <v-navigation-drawer
        v-model="drawer"
        color="primary"
        disable-resize-watcher
    >
        <v-list nav>
            <!-- When you use the link prop, the element automatically becomes a router-link - <router-link></router-link> -->
            <v-list-item />
        </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-md-4">
        <template #prepend>
            <v-app-bar-nav-icon />
        </template>

        <!--
            <v-img
                class="me-sm-8"
                max-width="40"
                src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
            />
        -->

        <!-- desktop version -->
        <template>
            <v-btn class="me-2 text-none" slim />
        </template>

        <v-spacer />

        <template #append>
            <v-btn
                class="ms-1"
                color="medium-emphasis"
                icon="mdi-bell-outline"
            />

            <v-btn class="ms-1" icon>
                <v-avatar image="https://cdn.vuetifyjs.com/images/john.png" />

                <v-menu activator="parent" origin="top">
                    <v-list>
                        <v-list-item link title="Update profile" />

                        <v-list-item link title="Sign out" />
                    </v-list>
                </v-menu>
            </v-btn>
        </template>
    </v-app-bar>

    <v-main height="80">
        <!--  -->
    </v-main>
</template>
