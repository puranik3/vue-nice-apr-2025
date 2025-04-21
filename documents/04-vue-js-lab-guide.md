# Vue JS Lab Guide

---

## Step 1: Getting started - Vue instance, instance data, data binding, el for the element with HTML template, and implicit mounting

**Code:**
- In `01-hello-vue-2.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hello Vue</title>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    });
  </script>
</body>
</html>
```

**Explanation:**

This is a basic "Hello World" example using Vue.js.

1. **HTML Structure**: The `<div id="app">` serves as the mounting point for the Vue instance. Inside this div, we use the `{{ message }}` syntax, known as **interpolation**, to display dynamic data.

2. **Including Vue.js**: The script tag includes Vue.js from a CDN, making the Vue library available for use.

3. **Vue Instance**: We create a new Vue instance with `new Vue({ ... })`. The `el` property specifies the DOM element to mount on (`#app`), and the `data` object contains the application's data.

4. **Reactivity**: Vue's reactivity system ensures that if the `message` data changes, the displayed content in the HTML will automatically update to reflect the new value.

---

## Step 2: Data as a function, template, and explicit mounting

**Code:**
- In `02-data-function-template-$mount.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script>
      // v2
      const root = new Vue({
        // you can $mount() method
        // el: "#app",

        // either a data object (does not work in Vue 3),
        // data: {
        //     message: "Hello Vue",
        // },

        // a function that returns the data object (works in Vue 2, 3)
        data() {
          return {
            message: "Hello Vue",
          };
        },
        template: `
          <div>
            <h1>Getting started with Vue</h1>
            <div>{{ message }}</div>
          </div>
        `,
      });

      // execute any other logic
      // ...

      root.$mount("#app");
    </script>
  </body>
</html>
```

---

**Explanation:**

This code demonstrates how to create a Vue 2 instance with an inline template and mount it explicitly to a DOM element. Let's break down the key components:

1. **HTML Structure:**
   - The `<div id="app"></div>` serves as the mounting point for the Vue instance. This is where the Vue application will render its content. Note that this is left empty now, as the template is provided by the instance using the `template` property.

2. **Creating the Vue Instance:**
   - **Mounting Options:**
     - The `el` option is commented out. Instead of specifying the mounting element here, the instance will be mounted later using the `$mount()` method.

   - **Data Option:**
     - The `data` option is defined as a function returning an object with a `message` property.

     - This approach ensures that each instance of the component has its own separate data object, preventing shared state across instances.

     - Note: In Vue 3, the `data` option must be a function, even for root instances.

   - **Template Option:**
     - The `template` option defines the HTML structure that the Vue instance will render.

     - It includes a heading and a `div` that interpolates the `message` data property using the `{{ message }}` syntax.

3. **Mounting the Vue Instance:**
   - After defining the Vue instance, the `$mount()` method is called with `"#app"` as the argument.

   - This explicitly mounts the Vue instance to the DOM element with the ID `app`.

   - Using `$mount()` provides flexibility, allowing you to perform additional setup before mounting the instance.

---

**Key Takeaways:**

- **Data as a Function:**
  - Defining `data` as a function ensures that each Vue instance has its own separate data object.

  - This practice prevents unintended side effects caused by shared state across multiple instances.

- **Explicit Mounting with `$mount()`:**
  - Using the `$mount()` method allows for more control over when and how the Vue instance is mounted to the DOM.

  - This can be particularly useful when you need to perform additional logic before mounting.

- **Template Rendering:**
  - The `template` option provides a way to define the HTML structure directly within the Vue instance.

  - This is an alternative to using the `el` option with pre-defined HTML content.

---

## Step 3: Initializing a Vue 3 Application with `createApp()` and `mount()`

**Code:**
- In `03-hello-vue-2.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- Vue 3 CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script>

    <script>
      // Initialize Vue 3 application
      const root = Vue.createApp({
        // In Vue 3, the 'el' option is removed
        // el: "#app",

        // Defining data as a function returning an object (required in Vue 3)
        data() {
          return {
            message: "Hello Vue",
          };
        },
        template: `
          <div>
            <h1>Getting started with Vue</h1>
            <div>{{ message }}</div>
          </div>
        `,
      });

      // Additional logic can be executed here before mounting

      // Mount the application to the DOM element with id 'app'
      root.mount("#app");
    </script>
  </body>
</html>
```

---

**Explanation:**

This example illustrates the updated method of initializing a Vue application in Vue 3.

1. **Including Vue 3:**
   - The Vue 3 library is included via a CDN link.

2. **Creating the Application Instance:**
   - The `Vue.createApp()` function is used to create a new application instance. This replaces the `new Vue()` constructor from Vue 2.

3. **Data Option:**
   - The `data` property is defined as a function returning an object. This is a requirement in Vue 3, ensuring that each component instance maintains its own reactive state.

4. **Template Option:**
   - The `template` property defines the HTML structure that the Vue application will render. It utilizes Vue's template syntax, including interpolation with `{{ message }}` to display dynamic data.

5. **Mounting the Application:**
   - The `mount()` function is called on the application instance to mount it to the DOM element with the specified selector (`#app`). This replaces the `$mount()` method used in Vue 2.

---

**Key Differences Between Vue 2 and Vue 3:**

- **Application Creation:**
  - *Vue 2:* Uses `new Vue({ ... })` to create an application instance.
  - *Vue 3:* Uses `Vue.createApp({ ... })` to create an application instance.

- **Mounting the Application:**
  - *Vue 2:* Uses the `el` option or the `$mount()` method to mount the application.
  - *Vue 3:* Uses the `mount()` function on the application instance to mount the application.

- **Data Definition:**
  - *Vue 2:* Allows `data` to be an object or a function returning an object.
  - *Vue 3:* Requires `data` to be a function returning an object.

---

## Step 4: Event Handling with `@event` (eg. `@click`)

**Code:**

- In `04-event-handling-and-data-binding.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data binding</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          message: "Hello Vue 2",
        },
        template: `
          <div class="container my-5">
            <div>{{ message }}</div>
            <button
              @click="message = 'Hello Vue 3'"
              class="btn btn-sm btn-primary"
            >
              Change message
            </button>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see the text "Hello Vue 2" displayed. Clicking the "Change message" button will update the text to "Hello Vue 3".

**Explanation:**

In this example, we're demonstrating how to handle click events in Vue 2 using the `@click` directive.

1. **Event Handling with `@click`:** The `@click` directive is a shorthand for `v-on:click` in Vue.js. It allows you to listen for click events on the specified element.

2. **Inline Event Handler:** Here, the `@click` directive is used with an inline expression: `message = 'Hello Vue 3'`. When the button is clicked, this expression is evaluated, updating the `message` data property.

3. **Reactivity:** Vue's reactivity system ensures that when the `message` data property changes, the DOM is automatically updated to reflect the new value.

**Note:** While this example uses an inline expression for event handling, Vue also allows you to define methods within the `methods` option of the Vue instance and reference them in your templates. This approach is particularly useful for handling more complex logic and will be covered in a later step.

The syntax for binding events remains consistent: `@event="handler"` or `v-on:event="handler"` in Vue 3. Event modifiers like `.prevent`, `.stop`, and `.once` continue to function as in Vue 2.

---

## Step 5: Displaying Data from an External Object with Attribute Binding

- In `05-attribute-binding.html`

**Code:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data binding</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script src="../scripts/workshops.js"></script>

    <script>
      // v2
      new Vue({
        el: "#app",
        data: {
          workshop: workshops[0],
        },
        template: `
          <div class="container my-5">
            <div class="card" style="width: 18rem;">
              <img
                :src="workshop.imageUrl"
                :alt="workshop.name"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{ workshop.name }}</h5>
                <div class="card-text">
                  {{ workshop.description }}
                </div>
                <a href="#" class="btn btn-primary">Know more</a>
              </div>
            </div>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see a Bootstrap-styled card displaying the workshop's image, name, and description.

**Explanation:**

This example demonstrates how to display data from an external object and bind attributes dynamically in Vue.js.

**New Concepts Introduced:**

1. **External Data Source:**
   - The `workshops.js` script is included (check with the instructor), which defines an array of workshop objects.
   - The Vue instance's `data` property assigns the first workshop object to `workshop`.

2. **Attribute Binding with `v-bind`:**
   - The `:src` and `:alt` attributes of the `<img>` tag are bound to `workshop.imageUrl` and `workshop.name`, respectively. We are utilizing `v-bind` (shorthand `:`) to dynamically set HTML attributes based on data properties.
   - This ensures that the image source and alternative text dynamically reflect the data from the `workshop` object.

---

## Step 6: Rendering Raw HTML with `v-html`

- In `06-v-html.html`

**Code:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data binding</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script src="../scripts/workshops.js"></script>

    <script>
      // v2
      new Vue({
        el: "#app",
        data: {
          workshop: workshops[0],
        },
        template: `
          <div class="container my-5">
            <div class="card p-3 w-100">
              <img
                :src="workshop.imageUrl"
                :alt="workshop.name"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{ workshop.name }}</h5>
                <div
                  class="card-text"
                  v-html="workshop.description"
                ></div>
                <a href="#" class="btn btn-primary">Know more</a>
              </div>
            </div>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see a Bootstrap-styled card displaying the workshop's image, name, and a formatted description rendered as HTML.

**Explanation:**

In this example, we're introducing the `v-html` directive to render raw HTML content within the Vue template.

**New Concepts Introduced:**

1. **`v-html` Directive:**
   - The `v-html` directive allows you to render raw HTML content within an element. In this case, it's used to render the `workshop.description` property, which contains HTML-formatted text.
   - Unlike the standard `{{ }}` interpolation, which treats content as plain text, `v-html` interprets and renders the HTML tags within the bound data.

**Comparison with Previous Step:**

In the previous step, we displayed the workshop description using `{{ workshop.description }}`, which would render any HTML tags as plain text. By using `v-html`, we enable the rendering of HTML content, allowing for formatted descriptions with elements like paragraphs, lists, or emphasis.

**Security Consideration:**

While `v-html` is powerful, it can introduce security risks such as Cross-Site Scripting (XSS) if used with untrusted content. It's crucial to ensure that any HTML content rendered with `v-html` is from a trusted source. If rendering user-generated content, consider sanitizing it before binding.

---

## Step 7: Conditional Rendering with `v-if`, and `v-if` vs `v-show`

**Code:**
- In `07-conditional-rendering.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script>
      // v2
      new Vue({
        el: "#app",
        data: {
          couponCode: "NEW30",
        },
        template: `
          <div class="container my-5">
            <h1>My Cart</h1>
            <hr />

            <div
              class="alert alert-light"
              v-if="couponCode !== ''"
            >
              Coupon <span class="badge bg-primary">{{ couponCode }}</span> has been successfully applied
            </div>

            <!-- EXERCISE: This button should not be shown if there is no couponCode (empty) -->
            <button
              @click="couponCode = ''"
              class="btn btn-sm btn-danger"
            >
              Remove coupon
            </button>

            <!-- Add a button which when clicked will set NEW30 as coupon code. Button should be hidden if couponCode exists -->
          </div>
        `,
      });
    </script>
  </body>
</html>
```

This button will appear only when there is no coupon code, allowing users to apply the "NEW30" coupon.

**Explanation:**

In this example, we're introducing the `v-if` directive to conditionally render elements based on the application's state.

**New Concepts Introduced:**

1. **`v-if` Directive:**
   - The `v-if` directive is used to conditionally render a block of HTML. The block will only be rendered if the directive's expression returns a truthy value.
   - In the provided code, the alert message is wrapped with `v-if="couponCode !== ''"`, ensuring it only appears when a coupon code is present.

2. **Conditional Display of Elements:**
   - The comment indicates that the "Remove coupon" button should not be shown if there is no coupon code. This can be achieved by wrapping the button with a `v-if` directive similar to the alert message.
   - Additionally, a button to apply the coupon code can be added and conditionally displayed when no coupon code is present.

3. `v-if` and `v-show` directives are used for conditional rendering, but they operate differently under the hood and are suited for different scenarios.

#### `v-if`

- **Behavior**: Renders elements conditionally. If the condition is false, the element and its children are not rendered in the DOM.

- **Performance**: Has a higher toggle cost because elements are created and destroyed each time the condition changes.

- **Use Case**: Ideal when the condition is unlikely to change frequently during runtime.

#### `v-show`

- **Behavior**: Always renders the element and toggles its visibility using the CSS `display` property. The element remains in the DOM regardless of the condition.

- **Performance**: Has a higher initial render cost but a lower toggle cost since it doesn't involve DOM creation or destruction upon condition changes.

- **Use Case**: Best when you need to toggle the visibility of an element frequently.

### Summary

- Use `v-if` when:
  - The condition is unlikely to change frequently.
  - You want to avoid rendering the element until necessary.

- Use `v-show` when:
  - You need to toggle the element's visibility often.
  - Keeping the element in the DOM is acceptable or required (for example if a child component state is to be maintained).

Choosing between `v-if` and `v-show` depends on the specific needs of your application, particularly regarding performance considerations and how often the condition changes. For example, if an accordion renders with panels in closed state initially, and user toggles them one-by-one, `v-if` would be preferable due to lower initial render time.

---

## Step 8: Conditional Rendering with `v-if` and `v-else`

**Code:**
- In `08-conditional-rendering-v-else.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <!-- Vue 3 CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script>

    <script>
      // Vue 3
      const root = Vue.createApp({
        data() {
          return {
            couponCode: "NEW30",
          };
        },
        template: `
          <div class="container my-5">
            <h1>My Cart</h1>
            <hr />

            <div
              class="alert alert-light"
              v-if="couponCode !== ''"
            >
              Coupon <span class="badge bg-primary">{{ couponCode }}</span> has been successfully applied
            </div>

            <button
              @click="couponCode = ''"
              v-if="couponCode !== ''"
              class="btn btn-sm btn-danger"
            >
              Remove coupon
            </button>
            <button
              @click="couponCode = 'NEW30'"
              v-else
              class="btn btn-sm btn-primary"
            >
              Add coupon
            </button>
          </div>
        `,
      });

      root.mount("#app");
    </script>
  </body>
</html>
```

You should see a heading "My Cart" and an alert message indicating that the coupon "NEW30" has been applied. A "Remove coupon" button is displayed. Clicking this button will remove the coupon code, causing the alert to disappear and an "Add coupon" button to appear. Clicking "Add coupon" will reapply the coupon code, restoring the original state.

**Explanation:**

In this example, we're enhancing the conditional rendering logic by introducing the `v-else` directive, which complements the previously used `v-if` directive.

**New Concepts Introduced:**

1. **`v-else` Directive:**
   - The `v-else` directive is used to render an element when the preceding `v-if` condition evaluates to `false`.
   - In the code, the "Add coupon" button is wrapped with `v-else`, ensuring it only appears when `couponCode` is an empty string.

2. **Mutually Exclusive Rendering:**
   - By using `v-if` and `v-else` together, we ensure that only one of the two buttons ("Remove coupon" or "Add coupon") is displayed at any given time, based on the state of `couponCode`.

---

## Step 9: Defining Methods with Default Parameters and Handling Events with Arguments

**Code:**
- In `09-methods-and-event-handling.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      // Vue 2
      const root = new Vue({
        el: "#app",
        data: {
          name: "Vue 2",
        },
        methods: {
          getMessage(greeting = "Hello") {
            return `${greeting} ${this.name}`;
          },
          changeName(event, name = "Vuex") {
            console.log(event); // the event details
            this.name = name;
          },
        },
        template: `
          <div class="container my-5">
            <div>{{ getMessage('Good morning') }}</div>

            <button
              @click="changeName($event, 'Vue 3')"
              class="btn btn-sm btn-primary"
            >
              Change to Vue 3
            </button>
            <button
              @click="changeName"
              class="btn btn-sm btn-primary"
            >
              Change to default name (Vuex)
            </button>
            <!-- Add a button that changes name to Vue 2 -->
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see a message "Good morning Vue 2" and two buttons. Clicking "Change to Vue 3" will update the message to "Good morning Vue 3". Clicking "Change to default name (Vuex)" will update the message to "Good morning Vuex".

**Explanation:**

In this example, we're introducing two key concepts:

1. **Defining Methods with Default Parameters:**
   - The `getMessage` method uses a default parameter `greeting = "Hello"`. If no argument is provided when calling this method, it defaults to "Hello".
   - Similarly, the `changeName` method has a default parameter `name = "Vuex"`. If no name is provided, it defaults to "Vuex".

2. **Handling Events with Arguments:**
   - The `changeName` method is designed to handle click events. It accepts the event object and an optional name parameter.
   - In the template, the first button explicitly passes the event object and the string 'Vue 3' to the `changeName` method using `@click="changeName($event, 'Vue 3')"`
   - The second button uses `@click="changeName"`, which implicitly passes the event object. Since no name is provided, the method uses the default value "Vuex".

---

## Step 10: Exercise - Dynamic Subscription Plan Selector
This exercise reinforces your understanding of conditional rendering and event handling in Vue 3 (`10-exercise-dynamic-subscription-plan-selector.html`)

**Objective:**
Create a Vue 3 application that allows users to view and switch between different subscription plans
    — Free (create unlimited public repositories)
    - Premium (free plan features + create unlimited private repositories)
    - Pro (premium plan features + use CoPilot)

**Requirements:**

- Display the current subscription plan's name and its associated features
- Provide buttons to switch to other available plans
- Ensure that only buttons for plans not currently selected are visible
- Utilize Vue's conditional rendering directives (`v-if`, `v-else-if`, `v-else`) to manage the display logic

---

**Solution**

- In `10-exercise-dynamic-subscription-plan-selector.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello Vue</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
        />
    </head>
    <body>
        <div id="app"></div>

        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script>

        <script>
            // v3
            const root = Vue.createApp({
                data() {
                    return {
                        plan: {
                            name: "Free",
                            feature: "create unlimited public repositories",
                        },
                    };
                },
                methods: {
                    getFreePlan() {
                        this.plan.name = "Free";
                        this.plan.feature =
                            "create unlimited public repositories";
                    },
                    getPremiumPlan() {
                        this.plan.name = "Premium";
                        this.plan.feature =
                            "create unlimited private repositories";
                    },
                    getProPlan() {
                        this.plan.name = "Pro";
                        this.plan.feature =
                            "create unlimited private repositories, you can use CoPilot";
                    },
                },
                template: `
                    <div class="container my-5">
                        <h1>My subscription</h1>
                        <hr />

                        <!--
                            You can be on
                                - 'Free' plan -> create unlimited public repositories
                                - 'Premium' plan -> create unlimited private repositories
                                - 'Pro' plan -> create unlimited private repositories, you can use CoPilot

                            What to show (Use v-else-if)
                            - Name of plan
                            - Features of plan
                            - 2 Buttons to switcg to the other 2 plans
                        -->
                        <div><strong>{{plan.name}}</strong> plan opted which offers features like <strong>{{ plan.feature }}</strong></div>
                        <div class="my-3">
                            <button
                            @click = "getProPlan()"
                            class="btn btn-sm btn-primary mx-1"
                            v-if="plan.name !== 'Pro'"
                            >
                                Pro
                            </button>

                            <button
                            @click= "getPremiumPlan()"
                            class="btn btn-sm btn-primary mx-1"
                            v-if="plan.name !== 'Premium'"
                            >
                                Premium
                            </button>



                            <button
                            @click= "getFreePlan() "
                            class="btn btn-sm btn-primary mx-1"
                            v-if="plan.name !== 'Free'"
                            >
                                Free
                            </button>
                        </div>
                    </div>
                `,
            });

            root.mount("#app");
        </script>
    </body>
</html>
```

---

## Step 11: Rendering Lists with `v-for`

### Code:

- In `11-v-for-list-rendering.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue List Rendering</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <script src="../scripts/workshops.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          workshops: workshops,
        },
        template: `
          <div class="container my-5">
            <h1>List of Workshops</h1>
            <hr />

            <div class="row">
              <div
                class="col-12 col-md-4 d-flex my-3"
                v-for="(workshop, index) in workshops"
                :key="workshop.id"
              >
                <div class="card p-3 w-100">
                  <img
                    :src="workshop.imageUrl"
                    :alt="workshop.name"
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ workshop.name }}</h5>
                    <div class="card-text" v-html="workshop.description"></div>
                    <a href="#" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

Observe the list of workshops rendered dynamically. This step demonstrates how Vue.js enables dynamic rendering of lists based on data, enhancing the flexibility and interactivity of your applications.

### Explanation:

In this step, we explore how to render a list of items dynamically using Vue's `v-for` directive.

#### New Concepts Introduced:

1. **`v-for` Directive:**
   - The `v-for` directive allows you to render a list of elements by iterating over an array.
   - Syntax: `v-for="(item, index) in items"`
     - `item`: The current item in the iteration.
     - `index`: The index of the current item (optional).
   - In the code above, `v-for="(workshop, index) in workshops"` iterates over the `workshops` array, rendering a card for each workshop.

2. **`key` Attribute:**
   - The `:key` attribute is used to give each item a unique identifier. This helps Vue track elements efficiently, especially when the list changes.
   - It's recommended to use a unique and stable value, such as an `id`, for the `key`.
   - In the code above, `:key="workshop.id"` ensures that each workshop card has a unique key.

3. **Dynamic Binding with `v-bind`:**
   - The `v-bind` directive (shorthand `:`) is used to bind HTML attributes to data properties.
   - For example, `:src="workshop.imageUrl"` binds the `src` attribute of the `img` tag to the `imageUrl` property of the current `workshop` object.

---

## Step 12: Understanding the Importance of the `key` Attribute in `v-for` Loops

### Code:

- In `12-v-for-key.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue v-for Key Example</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <!--
        Before update (without key) virtual DOM is
        <div>Apples</div>
        <div>Oranges</div>
        <div>Bananas</div>

        After update (without key) virtual DOM is
        <div>Guavas</div> -> DOM manipulation for text from Apples -> Guavas
        <div>Apples</div> -> DOM manipulation for text from Oranges -> Apple
        <div>Oranges</div> -> DOM manipulation for text from Bananas -> Oramges
        <div>Bananas</div> -> DOM manipulation create a new div

        4 DOM maipulation

        Before update (with key) virtual DOM is
        <div key="1">Apples</div>
        <div key="2">Oranges</div>
        <div key="3">Bananas</div>

        After update (without key) virtual DOM is
        <div key="4">Guavas</div> -> DOM manipulation for creating a new div
        <div key="1">Apples</div>
        <div key="2">Oranges</div>
        <div key="3">Bananas</div>

        1 DOM manipulation - good for performance
    -->

    <script>
      new Vue({
        el: "#app",
        data: {
          fruits: [
            { id: 1, name: "Apples" },
            { id: 2, name: "Oranges" },
            { id: 3, name: "Bananas" },
          ],
          fruitName: "",
          nextId: 4,
        },
        methods: {
          addFruit() {
            this.fruits.unshift({
              id: this.nextId,
              name: this.fruitName,
            });
            this.nextId++;
            this.fruitName = "";
          },
        },
        template: `
          <div class="container my-5">
            <h1>List of Fruits</h1>
            <hr />

            <!-- "key" should be unique among the items in that array, and should be stable (cannot be updated) -->
            <div class="list-group">
              <div
                class="list-group-item"
                v-for="fruit in fruits"
                :key="fruit.id"
              >
                {{ fruit.name }}
              </div>
            </div>

            <h2 class="mt-5">Add a fruit</h2>
            <!-- keyup modifier for keyup event (run the method when Enter key is pressed) -->
            <input
              type="text"
              class="form-control"
              v-model.trim="fruitName"
              @keyup.enter="addFruit"
            />
          </div>
        `,
      });
    </script>
  </body>
</html>
```

Observe the list of fruits and add new ones by typing a name and pressing Enter. This step highlights the importance of the `key` attribute in Vue.js for efficient and accurate rendering of dynamic lists.

### Explanation:

In this example, we're rendering a dynamic list of fruits using Vue's `v-for` directive. Each fruit has a unique `id` and a `name`. Users can add new fruits to the beginning of the list by typing a name and pressing Enter.

#### New Concepts Introduced:

1. **The `key` Attribute in `v-for` Loops:**
   - The `key` attribute is used to give each item in a list a unique identifier. This helps Vue track elements efficiently when updating the DOM.
   - In the code above, `:key="fruit.id"` assigns a unique key to each fruit based on its `id`.

2. **Why is `key` Important?**
   - When Vue updates a list rendered with `v-for`, it uses an "in-place patch" strategy by default. This means it tries to reuse existing elements instead of recreating them.
   - Without a unique `key`, Vue may not correctly identify which items have changed, leading to potential issues like incorrect data display or loss of component state.
   - By providing a unique `key`, Vue can accurately track each item, ensuring that updates are efficient and correct.

3. **Best Practices for Using `key`:**
   - Always use a unique and stable identifier for the `key`, such as an `id` from your data.
   - Avoid using the index of the array as the `key`, as it can lead to unexpected behavior when the list changes.
   - Ensure that the `key` is unique among sibling elements to prevent rendering issues.

---

## Step 13: v-model and Form Validation

**Code:**
- In `13-v-model-and-form-validation.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script>
      // v2
      new Vue({
        el: "#app",
        // v2 -> either a data object, a function that returns the data object
        data: {
          credentials: {
            username: "jonathan",
            password: "",
          },
          errors: {
            username: "",
            password: "",
          },
          // x: 100
        },
        methods: {
          login(event) {
            event.preventDefault(); // prevent browser submission

            console.log(this.credentials); // we can see the internal accessor methods setup to detect data changes

            const credentials = {
              username: this.credentials.username,
              password: this.credentials.password,
            };

            if (this.validatePassword()) {
              console.log("All good!");
              // we will send the data (here we log the data instead)
              console.log(credentials); // local credentials created above - no extra methods etc.
            } else {
              console.log(this.errors.password);
            }
          },
          validatePassword() {
            // validations
            // add a "required" check on the password
            // ...

            if (/[A-Z]/.test(this.credentials.password) === false) {
              this.errors.password =
                "Requires at least one uppercase letter";
              return false; // stop validating
            }

            if (/[a-z]/.test(this.credentials.password) === false) {
              this.errors.password =
                "Requires at least one lowercase letter";
              return false; // stop validating
            }

            // add more validatons
            // ...

            this.errors.password = ""; // clear the error
            return true;
          },
        },
        template: `
          <div class="container my-5">
            <h1>Sign in</h1>
            <hr />

            <form @submit="login">
              <div class="row mb-2">
                <label
                  class="col-form-label col-12 col-md-2"
                  for="username"
                >
                  Username
                </label>
                <div class="col-12 col-md-10">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    v-model="credentials.username"
                  />
                  <!-- <div>{{ credentials.username }}</div> -->
                </div>
              </div>
              <div class="row mb-2">
                <label
                  class="col-form-label col-12 col-md-2"
                  for="password"
                >
                  Password
                </label>
                <div class="col-12 col-md-10">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="credentials.password"
                    @input="errors.password = credentials.password === '' ? 'Required password' : ''"
                  />
                  <!-- <div>{{ credentials.password }}</div> -->
                  <div
                    class="text-danger"
                    style="font-size: 0.85em;"
                    v-if="errors.password"
                  >
                    {{ errors.password }}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="btn btn-sm btn-primary"
                  @click=""
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see a login form with fields for username and password. Entering a password that doesn't meet the validation criteria will display appropriate error messages. Upon entering valid credentials and submitting the form, the credentials will be logged to the console.

**Explanation:**

In this example, we demonstrate how to handle form validation in Vue.js using nested data structures. The form captures user credentials and performs basic validation on the password field.

**New Concepts Introduced:**

1. **Nested Data Binding with `v-model`:**
   - The form uses `v-model` to bind input fields to nested properties within the `credentials` object (`credentials.username` and `credentials.password`).
   - This approach allows for organized and structured data management, especially in complex forms.

2. **Understanding `v-model`:**
   - The `v-model` directive in Vue.js provides two-way data binding between form input elements and the application's state.
   - This means that when the user updates the form input, the bound data in the Vue instance is automatically updated, and when the data changes in Vue, the form input value is updated as well.
   - Under the hood, `v-model` is syntactic sugar for binding the `value` attribute and listening to the `input` event:
     ```html
     <input
       :value="text"
       @input="text = $event.target.value"
     >
     ```

3. **Real-time Validation Feedback:**
   - An `@input` event listener on the password field provides immediate feedback by updating the `errors.password` property if the field is left empty.
   - This enhances user experience by promptly informing users of validation issues.

4. **Custom Validation Logic:**
   - The `validatePassword` method performs checks to ensure the password contains at least one uppercase and one lowercase letter.
   - If the validation fails, appropriate error messages are set in the `errors.password` property.

5. **Form Submission Handling:**
   - The `login` method prevents the default form submission behavior using `event.preventDefault()`.
   - It then validates the password and logs the credentials if validation passes.

---

## Step 14: Advanced Form Input Handling with `v-model` Modifiers

**Code:**

- In `14-event-modifiers-advanced-form-handling.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

    <script>
      // v2
      new Vue({
        el: "#app",
        data: {
          credentials: {
            username: "jonathan",
            password: "",
            age: "",
          },
          errors: {
            username: "",
            password: "",
            age: "",
          },
        },
        methods: {
          login() {
            console.log(this.credentials);

            const credentials = {
              username: this.credentials.username,
              password: this.credentials.password,
            };

            if (this.validatePassword()) {
              console.log("All good!");
              console.log(credentials);
            } else {
              console.log(this.errors.password);
            }
          },
          validatePassword() {
            if (/[A-Z]/.test(this.credentials.password) === false) {
              this.errors.password =
                "Requires at least one uppercase letter";
              return false;
            }

            if (/[a-z]/.test(this.credentials.password) === false) {
              this.errors.password =
                "Requires at least one lowercase letter";
              return false;
            }

            this.errors.password = "";
            return true;
          },
        },
        template: `
          <div class="container my-5">
            <h1>Sign in</h1>
            <hr />

            <form @submit.prevent="login">
              <div class="row mb-2">
                <label
                  class="col-form-label col-12 col-md-2"
                  for="username"
                >
                  Username
                </label>
                <div class="col-12 col-md-10">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    v-model.trim="credentials.username"
                  />
                </div>
              </div>
              <div class="row mb-2">
                <label
                  class="col-form-label col-12 col-md-2"
                  for="password"
                >
                  Password
                </label>
                <div class="col-12 col-md-10">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model.trim="credentials.password"
                    @input="errors.password = credentials.password === '' ? 'Required password' : ''"
                  />
                  <div
                    class="text-danger"
                    style="font-size: 0.85em;"
                    v-if="errors.password"
                  >
                    {{ errors.password }}
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label
                  class="col-form-label col-12 col-md-2"
                  for="age"
                >
                  Age
                </label>
                <div class="col-12 col-md-10">
                  <input
                    type="number"
                    id="age"
                    class="form-control"
                    v-model.trim.number="credentials.age"
                  />
                  <div
                    class="text-danger"
                    style="font-size: 0.85em;"
                    v-if="errors.age"
                  >
                    {{ errors.age }}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="btn btn-sm btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see a login form with fields for username, password, and age. The form utilizes `v-model` modifiers to process user input effectively, ensuring data cleanliness and proper type handling.

**Explanation:**

In this example, we enhance form input handling by utilizing Vue.js's `v-model` directive with modifiers to manage user input more effectively.

**New Concepts Introduced:**

1. **`v-model.trim` Modifier:**
   - The `.trim` modifier automatically removes leading and trailing whitespace from user input.
   - This ensures that accidental spaces do not affect data processing or validation.

2. **`v-model.number` Modifier:**
   - The `.number` modifier converts the input string into a numeric value.
   - This is particularly useful for inputs like age, where numerical data is expected.

3. **Combining Modifiers:**
   - Modifiers can be combined (e.g., `v-model.trim.number`) to apply multiple transformations to the input data.

4. **Form Submission Handling:**
   - The `@submit.prevent` directive prevents the default form submission behavior, allowing for custom handling within the `login` method.

---

## Step 15: Utilizing Computed Properties for Derived Data

**Code:**

- In `15-computed-properties.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          firstName: "John",
          lastName: "Doe",
        },
        computed: {
          fullName() {
            return `${this.firstName} ${this.lastName}`;
          },
        },
        methods: {
          getFullName() {
            return `${this.firstName} ${this.lastName}`;
          },
        },
        template: `
          <div class="container my-5">
            Full name: {{ fullName }}
          </div>
        `,
      });
    </script>
  </body>
</html>
```

You should see the full name displayed as "John Doe". If you modify the `firstName` or `lastName` in the data section, the displayed full name will automatically update to reflect the changes.

**Explanation:**

In this example, we demonstrate how to use a computed property to derive a full name by combining `firstName` and `lastName`. The `fullName` computed property automatically updates whenever `firstName` or `lastName` changes, ensuring that the displayed full name is always current.

**New Concepts Introduced:**

1. **Computed Properties:**
   - Computed properties are functions defined in the `computed` section of a Vue instance.
   - They are used to compute values based on reactive data.
   - Unlike methods, computed properties are cached based on their dependencies. They only re-evaluate when one of their dependencies changes, leading to performance optimizations.

2. **Methods vs. Computed Properties:**
   - Methods are functions defined in the `methods` section and are re-evaluated every time they are called, regardless of whether their dependencies have changed.
   - Computed properties, on the other hand, are only re-evaluated when their dependencies change. This makes them more efficient for scenarios where the computed value is used multiple times in the template.

---

## Step 16: Exercise - Filtering a product list (2-way data bidning, computed properties)

**Objective:**

Create a Vue app (`16-exercise-filtering-product.html`) implementing a feature that allows users to filter a list of products in real-time based on their input.

**Requirements:**

- Maintain an array of product objects, each containing at least a `name` property.

- Introduce a `filterKey` data property that captures the user's search input.

- Bind an input field to `filterKey` using the `v-model` directive to enable two-way data binding.

- Create a computed property named `filteredProducts` that returns a subset of the products array. This subset should include only those products whose names contain the `filterKey` as a substring. The filtering should be case-insensitive.

- Display the filtered list of products in the template using the `v-for` directive.

**Implementation Guidance:**

- Define the `products` array and `filterKey` within the `data` object of your Vue instance.

- Use the `v-model` directive on an input field to bind it to `filterKey`.

- Within the `computed` section, define the `filteredProducts` property. Use the JavaScript `filter()` method to return products whose `name` includes the `filterKey`. Ensure the comparison is case-insensitive.

- In your template, use the `v-for` directive to iterate over `filteredProducts` and display each product's name.

**Solution**

- In `16-exercise-filtering-product.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Vue Product Filter</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
    </head>
    <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
        new Vue({
        el: "#app",
        data: {
            filterKey: '',
            products: [
            { id: 1, name: 'Apple iPhone 14' },
            { id: 2, name: 'Samsung Galaxy S23' },
            { id: 3, name: 'Google Pixel 8' },
            { id: 4, name: 'OnePlus 12' },
            { id: 5, name: 'Xiaomi 13 Pro' },
            { id: 6, name: 'Nothing Phone 2' },
            ],
        },
        computed: {
            filteredProducts() {
            if (!this.filterKey.trim()) {
                return this.products;
            }
            const key = this.filterKey.toLowerCase();
            return this.products.filter(product =>
                product.name.toLowerCase().includes(key)
            );
            },
        },
        template: `
            <div class="container my-5">
            <h1>Product Search</h1>
            <hr />
            <div class="mb-3">
                <input
                type="text"
                class="form-control"
                placeholder="Search products..."
                v-model.trim="filterKey"
                />
            </div>
            <ul class="list-group">
                <li
                v-for="product in filteredProducts"
                :key="product.id"
                class="list-group-item"
                >
                {{ product.name }}
                </li>
                <li v-if="filteredProducts.length === 0" class="list-group-item text-muted">
                No products found.
                </li>
            </ul>
            </div>
        `,
        });
    </script>
    </body>
</html>
```

---

## Step 17: Dynamic Inline Styling with Computed Properties

**Code:**

- In `17-conditional-inline-styling.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Dynamic Styling</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          message: {
            text: "Mail was sent successfully",
            status: "success",
          },
          successMessage: {
            text: "Mail was sent successfully",
            status: "success",
          },
          errorMessage: {
            text: "Email could not be sent",
            status: "error",
          },
        },
        computed: {
          messageStyle() {
            const baseStyle = {
              border: "1px solid black",
              borderRadius: "4px",
              padding: "12px",
              margin: "16px 0",
            };

            const successStyle = {
              ...baseStyle,
              borderColor: "green",
              backgroundColor: "lightgreen",
            };

            const errorStyle = {
              ...baseStyle,
              borderColor: "crimson",
              backgroundColor: "lightpink",
            };

            return this.message.status === "success"
              ? successStyle
              : errorStyle;
          },
        },
        template: `
          <div class="container my-5">
            <div :style="messageStyle">
              {{ message.text }}
            </div>

            <button
              v-if="message.status === 'error'"
              @click="message = successMessage"
              class="btn btn-primary"
            >
              Show success message
            </button>
            <button
              v-else
              @click="message = errorMessage"
              class="btn btn-primary"
            >
              Show error message
            </button>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

Click the "Show error message" button to toggle the message and observe the style changes. This step illustrates how Vue.js enables dynamic styling of elements based on application state, enhancing user experience through visual feedback.

**Explanation:**

In this example, we're demonstrating how to apply dynamic inline styles to an element based on the application's state using computed properties in Vue.js.

**New Concepts Introduced:**

1. **Dynamic Inline Styling with `v-bind:style`:**
   - The `v-bind:style` directive (shorthand `:style`) allows you to bind an element's inline styles to a JavaScript object. This enables dynamic styling based on the component's data or computed properties.
   - In the code above, the `:style="messageStyle"` binding applies styles returned by the `messageStyle` computed property to the `<div>` displaying the message.

2. **Computed Properties for Styling:**
   - Computed properties in Vue.js are functions that compute and return values based on reactive dependencies. They are cached and only re-evaluate when their dependencies change, making them efficient for performance.
   - The `messageStyle` computed property returns a style object that changes based on the `message.status`. If the status is `'success'`, it returns styles with green borders and light green background; otherwise, it returns styles with crimson borders and light pink background.

3. **Using the Spread Operator for Style Composition:**
   - The spread operator (`...`) is used to create new style objects by combining the `baseStyle` with additional properties specific to the success or error state. This approach promotes reusability and cleaner code.

4. **Binding Styles Using String Syntax:**
   - Vue's `v-bind:style` directive also supports binding styles using a string. For example:

     ```html
     <div :style="'color: red; font-size: 16px;'">Styled Text</div>
     ```

   - This approach is useful when styles are stored as strings, such as from a database or external source. However, using object syntax is generally preferred for better readability and maintainability.

---

## Step 18: Dynamic Class Binding with Computed Properties

**Code:**

- In `18-conditional-class-styling.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Dynamic Class Binding</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
    <style>
      .alert {
        border: 1px solid black;
        border-radius: 4px;
        padding: 12px;
        margin: 16px 0;
      }

      /* status classes */
      .alert-success {
        border-color: green;
        background-color: lightgreen;
      }

      .alert-error {
        border-color: crimson;
        background-color: lightpink;
      }

      /* importance classes */
      .alert-important {
        font-weight: bold;
      }

      .alert-unimportant {
        font-weight: normal;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          successMessage: {
            text: "Mail was sent successfully",
            status: "success",
            importance: "unimportant",
          },
          errorMessage: {
            text: "Email could not be sent",
            status: "error",
            importance: "important",
          },
          message: null,
        },
        created() {
          this.message = this.successMessage;
        },
        computed: {
          messageClasses() {
            return {
              "alert-success": this.message.status === "success",
              "alert-error": this.message.status === "error",
              "alert-important": this.message.importance === "important",
              "alert-unimportant": this.message.importance === "unimportant",
            };
          },
        },
        template: `
          <div class="container my-5">
            <div class="alert" :class="messageClasses">
              {{ message.text }}
            </div>

            <button
              v-if="message.status === 'error'"
              @click="message = successMessage"
              class="btn btn-primary"
            >
              Show success message
            </button>
            <button
              v-else
              @click="message = errorMessage"
              class="btn btn-primary"
            >
              Show error message
            </button>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

Click the "Show error message" button to toggle the message and observe the class changes. This step illustrates how Vue.js enables dynamic class binding based on application state, enhancing user experience through visual feedback.

**Explanation:**

In this example, we're demonstrating how to apply dynamic CSS classes to an element based on the application's state using object syntax in Vue.js.

**New Concepts Introduced:**

1. **Dynamic Class Binding with Object Syntax:**
   - The `v-bind:class` directive (shorthand `:class`) allows you to bind an element's class attribute to an object. Each key in the object is a class name, and the corresponding value is a boolean that determines whether the class should be applied.
   - In the code above, the `:class="messageClasses"` binding applies classes returned by the `messageClasses` computed property to the `<div>` displaying the message.

2. **Computed Properties for Class Binding:**
   - Computed properties in Vue.js are functions that compute and return values based on reactive dependencies. They are cached and only re-evaluate when their dependencies change, making them efficient for performance.
   - The `messageClasses` computed property returns an object where each key is a class name, and the value is a condition based on the `message` object's `status` and `importance` properties.

3. **Combining Static and Dynamic Classes:**
   - The `class="alert"` attribute applies a static class to the `<div>`, while the `:class="messageClasses"` binding adds dynamic classes based on the component's state. Vue merges these classes seamlessly.

4. **Binding Classes Using String Syntax:**
   - Vue's `v-bind:class` directive also supports binding classes using a string. For example:

     ```html
     <div :class="'alert alert-success'">Success Message</div>
     ```

   - This approach is useful when the class names are stored as a single string, such as from a database or external source. However, using object or array syntax is generally preferred for better readability and maintainability.

---


## Step 19: Fetching data from an external data source (Web API), and loading it on mount using `mounted()` lifecycle hook

### Code

- In `19-data-fetching-mounted-lifecycle-hook.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js"></script>

    <script>
      // Function to fetch workshops data
      const getWorkshops = async () => {
        const response = await fetch(`https://workshops-server.onrender.com/workshops`);
        if (!response.ok) {
          const errorDetails =
            "Status Code: " +
            response.status +
            " Status Text: " +
            response.statusText;
          throw new Error(errorDetails);
        }
        
        const workshops = await response.json();

        return workshops;
      };

      new Vue({
        el: "#app",
        data: {
          loading: true,
          error: null,
          workshops: [],
        },
        template: `
          <div class="container my-5">
            <h1>List of workshops</h1>
            <hr />

            <div v-if="loading">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>

            <div v-else-if="error !== null">
              <div class="alert alert-danger">{{ error.message }}</div>
            </div>

            <div class="row" v-else>
              <div
                class="col-12 col-md-4 d-flex my-3"
                v-for="(workshop, index) of workshops"
                :key="workshop.id"
              >
                <div class="card p-3 w-100">
                  <img
                    :src="workshop.imageUrl"
                    :alt="workshop.name"
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ workshop.name }}</h5>
                    <div
                      class="card-text"
                      v-html="workshop.description"
                    ></div>
                    <a href="#" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        // Lifecyle hooks - https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-hooks
        // created() is called before the UI is shown
        created() {
            console.log("created");
        },
        // mounted() is called after the UI is shown
        async mounted() {
          try {
            this.workshops = await getWorkshops();
          } catch (error) {
            this.error = error;
          } finally {
            this.loading = false;
          }
        },
      });
    </script>
  </body>
</html>
```

### Explanation:

- **`getWorkshops` Function**: Now defined as an `async` function that uses `await` to fetch and parse the workshops data. If the response is not OK, it throws an error with detailed status information.

- **`mounted` Lifecycle Hook**: Declared as `async` to allow the use of `await` within it. This hook:
  - Attempts to fetch the workshops data and assign it to `this.workshops`.
  - If an error occurs during fetching, it is caught and assigned to `this.error`.
  - Regardless of success or failure, `this.loading` is set to `false` in the `finally` block to indicate that the loading process has completed.

### What are Lifecycle Hooks?

**Lifecycle hooks** in Vue.js are special functions that allow you to execute code at specific stages of a component's existence—from its creation, through updates, to its eventual destruction. They provide opportunities to perform actions like data fetching, DOM manipulation, or cleanup at appropriate times during a component's lifecycle.

### The `created()` Hook

The `created()` hook is invoked after a Vue component instance has been created, during which Vue has set up reactive data, computed properties, methods, and watchers. At this point, you can access and manipulate the component's reactive data and methods. However, the component has not yet been mounted to the DOM, so DOM elements are not accessible. This hook is commonly used for tasks such as initializing data, setting up timers, or fetching data from an API that doesn't require DOM interaction.

By utilizing the `created()` hook, you can perform operations that need to occur as soon as the component is instantiated, ensuring that necessary data or configurations are in place before the component is rendered. 

### The `mounted()` Hook

The `mounted()` hook is invoked after a Vue component has been inserted into the DOM. At this point, the component's template has been rendered, and its associated DOM elements are available. This hook is commonly used for tasks that require DOM access, such as initializing third-party libraries, setting up event listeners, or fetching data that depends on the component's rendered structure.

In the provided code, the `mounted()` hook is utilized to fetch workshop data from an external API once the component is mounted. This ensures that the data fetching occurs only after the component is ready and its DOM elements are accessible.

### created() vs mounted() for data fetching

When initiating data fetching as the UI is about to be displayed, the choice between Vue's `created()` and `mounted()` lifecycle hooks depends on your specific requirements:

- **Use `created()`**: If your data fetching does **not** rely on the DOM being rendered. This hook is called after the component is initialized, and you have access to reactive data and methods. It's suitable for fetching data that will be used to render the component. Additionally, `created()` is invoked during server-side rendering (SSR), making it ideal for universal applications.

- **Use `mounted()`**: If your data fetching **requires** access to the DOM or needs to interact with rendered elements. This hook is called after the component is mounted to the DOM, ensuring that all elements are available. However, `mounted()` is not called during SSR, so it's not suitable for data fetching in universal applications.

In summary, for data fetching that should occur immediately as the UI shows up and doesn't depend on the DOM, `created()` is generally the better choice.

---

## Step 20: Introducing Watchers for Reactive Side Effects (Pagination - fetch on  `page` data change), watchers vs computed properties

### Code
- In `20-watch-for-side-effects-and-using-axios.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello Vue</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
        />
    </head>
    <body>
        <div id="app"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.4/vue.global.min.js"></script> -->

        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js"></script>

        <script>
            // using fetch - we have not handled error using catch - whoever calls getWorkshops() will handle the error (if any)
            const getWorkshops = async (page = 1) => {
                try {
                    const response = await axios.get(
                        `https://workshops-server.onrender.com/workshops`,
                        {
                            params: {
                                _page: page,
                            },
                        }
                    );

                    return response.data;
                } catch (error) {
                    throw new Error("Some error occured");
                }
            };

            // v2
            new Vue({
                el: "#app",
                // v2 -> either a data object, a function that returns the data object
                data: {
                    loading: true,
                    error: null,
                    workshops: [],
                    page: 1,
                },
                methods: {
                    async getWorkshops() {
                        try {
                            const workshops = await getWorkshops(this.page);
                            this.workshops = workshops;
                        } catch (error) {
                            this.error = error;
                        } finally {
                            this.loading = false;
                        }
                    },
                },
                // watch is used to monitor change on some data item and run some logic (not to compute derived data from existing data - for that we have computed. computed is for deriving data synchronously. watch is for doing something asynchronously - like making call to the backend.)
                watch: {
                    // when page changes, we want to fetch fresh workshops and set the workshops data property
                    page(newPage, oldPage) {
                        console.log(oldPage, newPage);

                        this.getWorkshops();

                        // nothing returned unlike computed property's method
                    },
                },
                template: `
                    <div class="container my-5">
                        <h1>List of workshops</h1>
                        <hr />

                        <div v-if="loading">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="error !== null">
                            <div class="alert alert-danger">{{ error.message }}</div>
                        </div>

                        <div class="row" v-else>
                            <div class="col-12">
                                You are viewing page {{ page }}
                                <div>
                                    <button class="btn btn-sm btn-primary" @click="--page">Previous</button>
                                    <button class="btn btn-sm btn-primary" @click="++page">Next</button>
                                </div>
                            </div>

                            <!-- "key" should be unique among the items in that array, and should be stable (cannot be updated) -->

                            <div
                                class="col-12 col-md-4 d-flex my-3"
                                v-for="(workshop, index) of workshops"
                                :key="workshop.id"
                            >
                                <div class="card p-3 w-100">
                                    <img
                                        :src="workshop.imageUrl"
                                        :alt="workshop.name"
                                        class="card-img-top"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">{{ workshop.name }}</h5>
                                        <div
                                            class="card-text"
                                            v-html="workshop.description"
                                        ></div>
                                        <a href="#" class="btn btn-primary">Know more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                // Lifecyle hooks - https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-hooks
                // before UI is shown
                created() {
                    console.log("created");
                },
                mounted() {
                    this.getWorkshops();
                },
            });
        </script>
    </body>
</html>
```

### Overview

In this step, we enhance our Vue.js application by implementing a **watcher** to monitor changes to the `page` data property. When the `page` value changes—triggered by user interaction with the "Previous" and "Next" buttons—the watcher invokes the `getWorkshops()` method to fetch and display the corresponding set of workshops.

### New Concepts Introduced

#### Watchers

A **watcher** in Vue.js is a function that observes changes to a specific data property and executes a callback whenever that property changes. This is particularly useful for performing asynchronous operations or side effects in response to data changes.

**Key Characteristics:**

- **Purpose:** Execute custom logic in response to changes in data properties.

- **Use Cases:** Ideal for scenarios requiring asynchronous operations, such as API calls, when a data property changes.

- **Syntax:**

  
```javascript
  watch: {
    propertyName(newValue, oldValue) {
      // logic to execute when propertyName changes
    }
  }
  ```


**Example in Our Code:**


```javascript
watch: {
  page(newPage, oldPage) {
    console.log(oldPage, newPage);
    this.getWorkshops();
  },
}
```

In this example, the watcher observes the `page` property. When `page` changes, it logs the old and new values to the console and calls `getWorkshops()` to fetch the workshops for the new page.

**Note:** Watchers are distinct from computed properties. While computed properties are used to derive new data from existing data synchronously, watchers are suited for handling side effects and asynchronous operations in response to data changes.

---

## Step 21: Creating Reusable Components with Props and Local Registration

### Overview

In this step, we define a reusable `IconButton` component that accepts `icon` and `text` as props. We then register this component locally within our Vue instance and use it multiple times with different prop values.

### New Concepts Introduced

#### 1. Component Definition

A Vue component is defined as a plain JavaScript object that includes options such as `props`, `data`, `template`, and lifecycle hooks.

```javascript
const IconButton = {
  props: ['icon', 'text'],
  template: `
    <button>
      {{ icon }} {{ text }}
    </button>
  `,
  created() {
    console.log(this.icon, this.text);
  },
};
```

- **`props`**: An array specifying the names of props that the component accepts.

- **`template`**: Defines the HTML structure of the component.

- **`created()`**: A lifecycle hook that is called after the component is created. Here, it logs the received props to the console.

#### 2. Local Component Registration

Components can be registered locally within a Vue instance, making them available only within that instance. This approach promotes encapsulation and avoids polluting the global namespace.


```javascript
new Vue({
  el: '#app',
  components: {
    IconBtn: IconButton,
  },
  // ...
});
```

- The `components` option is an object where the keys are the names used in templates (e.g., `<IconBtn>`) and the values are the component definitions.

#### 3. Using Props in Templates

Props allow parent components to pass data to child components. In templates, props can be passed as either static values or dynamic expressions.


```html
<IconBtn icon="😀" :text="smile"></IconBtn>
<IconBtn icon="😂" text="Laugh"></IconBtn>
<IconBtn icon="😇" text="Halo"></IconBtn>
```


- **Static Props*: Passed as literal strings (e.g., `text="Laugh").

- **Dynamic Props*: Passed using the `v-bind` shorthand (`:`) to bind to data properties (e.g., `:text="smile").

#### 4. Accessing Props in Lifecycle Hook

Within a component, props can be accessed using `this.propName`. In the `created()` hook, we log the `icon` and `text` props to the consoe.


```javascript
created() {
  console.log(this.icon, this.text);
}
```


#### 5. Data as a Function in Component

In Vue 2, the `data` option in components must be a function that returns an object. This ensures that each instance of the component maintains its own separate daa.


```javascript
data() {
  return {
    smile: 'SMILE',
  };
}
```

### Complete HTML Example

- In `21-component-with-props-and-local-regisration.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      // Component Definition
      const IconButton = {
        props: ['icon', 'text'],
        template: `
          <button>
            {{ icon }} {{ text }}
          </button>
        `,
        created() {
          console.log(this.icon, this.text);
        },
      };

      // Vue Instance with Local Component Registration
      new Vue({
        el: '#app',
        components: {
          IconBtn: IconButton,
        },
        data() {
          return {
            smile: 'SMILE',
          };
        },
        template: `
          <div class="container my-5">
            Vue 2
            <IconBtn icon="😀" :text="smile"></IconBtn>
            <IconBtn icon="😂" text="Laugh"></IconBtn>
            <IconBtn icon="😇" text="Halo"></IconBtn>
          </div>
        `,
      });
    </script>
  </body>
</html
```

This example demonstrates how to create a reusable component with props, register it locally, and use it within a Vue insance.

---

## Step 22: Exercise - Star Rating component

**Objective**: Develop a reusable Vue.js component that visually represents a star-based rating system (`22-exercise-star-rating-component.html`).

**Requirements**:

1. **Display**:
   - Render exactly **5 stars** horizontally.
   - Each star should visually indicate its state based on the rating value:
     - **Empty Star**: Represents no rating for that star.
     - **Half-Filled Star**: Represents a half rating.
     - **Fully Filled Star**: Represents a full rating.

2. **Input**:
   - Accept a **`rating` prop** as input, which is a numerical value ranging from **0 to 5**, inclusive.
   - The `rating` can be a floating-point number between 0 - 5 (e.g., 3, 4.2).

3. **Behavior**:
   - Dynamically compute and display the combination of full, half, and empty stars based on the `rating` value.
   - Ensure that the component updates its display reactively when the `rating` prop changes.
   - The rating is rounded to the closest half star. Eg. 4.24 is rounded to 4, and 4.25 is rounded to 4.5 .

4. **Customization** (Optional Enhancements):
   - Enable styling options for colors, sizes.
   - Enable number of rating props (`numRatings`) and show that as well next to the stars.
   - Make it interactive. Maintain state as a local copy of th passed rating, and when a star is clicked, the component updates the local state. When you learn about child to parent component communication later on, you can update the logic to communicate the change to the parent instead, so the parent can update the `rating` (and local state can be removed).

**Example**:

- If `rating = 3.5`, the component should display:
  - 3 fully filled stars
  - 1 half-filled star
  - 1 empty star

---

## Step 23: Understanding Component Naming Conventions and Global Registration

### Overview

In this step, we delve into two essential aspects of Vue.js component management:

1. **Component and Prop Naming Conventions**: Understanding how Vue interprets component and prop names, especially concerning case sensitivity and HTML parsing.

2. **Global Component Registration**: Learning how to register components globally, making them accessible throughout the application without the need for local imports.

### 1. Component and Prop Naming Conventions

#### Component Names

Vue allows components to be named using either `PascalCase` or `kebab-case`. However, when using in-DOM templates (i.e., templates written directly in HTML files), it's recommended to use `kebab-case` due to HTML's case-insensitivity.

For example, a component registered as `IconBtn` can be used in the template as:

```html
<icon-btn></icon-btn>
```

or

```html
<IconBtn></IconBtn>
```

However, using mixed casing like `<icOn-bTn>` may lead to unexpected behavior and is discouraged.

#### Prop Names

When declaring props in a component, use `camelCase`. However, when passing props in templates, use `kebab-case`. This ensures consistency and avoids issues with HTML's case-insensitivity.

For instance, a prop declared as `btnText` in the component should be passed as `btn-text` in the template:

```html
<icon-btn icon="😀" :btn-text="smile"></icon-btn>
```

### 2. Global Component Registration
Global registration allows a component to be used anywhere in the Vue application without the need to import it in each component file. This is achieved using the `Vue.component()` method
For example

```javascript
Vue.component("IconBtn", IconButton);
```

Once registered globally, `IconBtn` can be used in any template within the Vue instance

```html
<icon-btn icon="😂" btn-text="Laugh"></icon-btn>
```

**Advantages of Global Registration*:

- **Convenience** No need to import the component in every file where it's use.

- **Consistency** Ensures uniform usage of components across the applicatio.

- **Ideal for Common Components** Best suited for components that are used frequently throughout the app, such as buttons, icons, or form element.
**Considerations**: While global registration offers convenience, it can lead to a larger global namespace and potential naming conflicts. It's essential to balance between global and local registration based on the component's usage scop.

---

### Complete HTML Example
Here's the complete code demonstrating these concept:

- In `23-component-and-prop-naming-and-global-registration.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Vue</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

    <script>
      // Component Definition Object
      const IconButton = {
        props: ["icon", "btnText"],
        template: `
          <button>
            {{ icon }} {{ btnText }}
          </button>
        `,
        created() {
          console.log(this.icon, this.btnText);
        },
      };

      // Global registration of the component
      Vue.component("IconBtn", IconButton);

      new Vue({
        el: "#app",
        data() {
          return {
            smile: "SMILE",
          };
        },
        template: `
          <div class="container my-5">
            Vue 2
            <!-- Using PascalCase component name with kebab-case prop -->
            <IconBtn
              icon="😀"
              :btn-text="smile"
            ></IconBtn>

            <!-- Using kebab-case component name with kebab-case prop -->
            <icon-btn icon="😂" btn-text="Laugh"></icon-btn>

            <!-- Using PascalCase component name with camelCase prop (may not work as expected in in-DOM templates) -->
            <IconBtn icon="😇" btnText="Halo"></IconBtn>

            <!-- Incorrect usage: mixed casing in component name and prop (will not work) -->
            <!-- <icOn-bTn icon="😇" text="Halo"></icOn-bTn> -->
          </div>
        `,
      });
    </script>
  </body>
</html>
```

This example illustrates the importance of adhering to naming conventions and the benefits of global component registration in Vue.js

---

## Step 24: Prop Validation and passing props that are not strings

### Code Example

- In `24-prop-validation-and-non-string-props.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <!-- Development build of Vue.js for prop validation -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.common.dev.min.js"></script>

  <script>
    // Component Definition Object
    const IconButton = {
      props: {
        icon: {
          type: String,
          required: true,
          validator(value) {
            return ["😀", "😂", "😇"].includes(value);
          },
        },
        BtnText: {
          type: String,
        },
        label: {
          type: Number,
          default: 0,
        },
      },
      template: `
        <button>
          {{ icon }} {{ BtnText }} {{ label }}
        </button>
      `,
      created() {
        console.log(this.icon, this.BtnText);
      },
    };

    // Global registration of the component
    Vue.component("IconBtn", IconButton);

    new Vue({
      el: "#app",
      data() {
        return {
          smile: "SMILE",
        };
      },
      template: `
        <div class="container my-5">
          Vue 2

          <!-- Valid usage: icon is valid, label is a number -->
          <IconBtn
            icon="😀"
            :btn-text="smile"
            :label="1"
          ></IconBtn>

          <!-- Missing required 'icon' prop -->
          <IconBtn
            :btn-text="smile"
            :label="1"
          ></IconBtn>

          <!-- 'label' passed as a string instead of number -->
          <Icon-Btn
            icon="😂"
            btn-text="Laugh"
            label="3"
          ></Icon-Btn>

          <!-- 'icon' value fails validator -->
          <icon-btn icon="😬" BtnText="Halo"></icon-btn>

          <!-- Incorrect casing: will not work -->
          <!-- <icOn-bTn icon="😇" text="Halo"></icOn-bTn> -->
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **Prop Validation**

Vue.js allows components to specify requirements for their props, ensuring that the correct data types and values are passed. This is particularly useful during development to catch potential bugs early.

- **`type`**: Specifies the expected data type of the prop. For example, `type: String` ensures the prop is a string.

- **`required`**: When set to `true`, Vue will issue a warning if the prop is not provided.

- **`default`**: Provides a default value for the prop if it is not passed by the parent component.

- **`validator`**: A custom function to validate the prop's value. It should return `true` if the value is valid, and `false` otherwise.

In the example, the `icon` prop is required, must be a string, and must be one of the specified emojis. The `label` prop expects a number and defaults to `0` if not provided.

#### 2. **Development Build for Prop Validation**

Prop validation warnings are only available in the development build of Vue.js. To utilize this feature, ensure you're using the development version, such as:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.common.dev.min.js"></script>
```


In production builds, these warnings are stripped out to optimize performance.

#### 3. **Attribute Binding and Type Casting**

When passing props in templates:

- **Without `:` (Static Binding)**: Values are treated as strings. For example, `label="3"` passes the string `"3"`.

- **With `:` (Dynamic Binding)**: Expressions are evaluated, and the resulting value is passed. For example, `:label="1"` passes the number `1`.

In the code, `:label="1"` correctly passes a number, while `label="3"` passes a string, which may lead to validation warnings if the prop expects a number.

#### 4. **Custom Validator Functions**

The `validator` function allows for custom validation logic beyond simple type checks. In the example, the `icon` prop uses a validator to ensure the value is one of the allowed emojis:

```javascript
validator(value) {
  return ["😀", "😂", "😇"].includes(value);
}
```

If a value outside this set is provided, Vue will issue a warning during developmet.

---

### Summary

This step highlights the importance of prop validation in Vue.js to ensure components receive the correct data. By specifying prop types, requirements, default values, and custom validators, developers can catch potential issues early and maintain robust, predictable components.

---

## Step 25: Composing Components

### Code Example

- In `25-composing-components.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

  <script>
    const FaqQuestion = {
      name: "FaqQuestion",
      props: ["question"],
      template: `
        <div class="p-3 bg-dark text-light">{{ question }}</div>
      `,
    };

    const FaqAnswer = {
      name: "FaqAnswer",
      props: ["answer"],
      template: `
        <div class="p-3">{{ answer }}</div>
      `,
    };

    const FaqItem = {
      name: "FaqItem",
      props: ["question", "answer"],
      components: {
        FaqQuestion,
        FaqAnswer,
      },
      template: `
        <div class="border border-dark">
          <faq-question :question="question"></faq-question>
          <faq-answer :answer="answer"></faq-answer>
        </div>
      `,
    };

    new Vue({
      el: "#app",
      components: {
        FaqItem,
      },
      data: {
        faqData: [
          {
            id: 1,
            question: "What is Vue?",
            answer: "It is a UI library created by Evan You, to build Single Page applications",
          },
          {
            id: 2,
            question: "What is Vuex?",
            answer: "It is one of the state management libraries created by the Vue team.",
          },
        ],
      },
      template: `
        <div class="container my-5">
          <div
            v-for="faqItem of faqData"
            :key="faqItem.id"
            class="mb-4"
          >
            <faq-item
              :question="faqItem.question"
              :answer="faqItem.answer"
            ></faq-item>
          </div>
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **Component Composition**

Component composition involves building complex components by combining simpler, reusable components. In the example above, `FaqItem` is composed of two child components: `FaqQuestion` and `FaqAnswer`. This approach promotes modularity and reusability, making the codebase easier to maintain and scale.

#### 2. **Local Registration of Components**

Components can be registered locally within another component's `components` option. This means the child components are only available within the parent component's scope. In the `FaqItem` component, `FaqQuestion` and `FaqAnswer` are registered locally, encapsulating their usage within `FaqItem`.

#### 3. **Props Passing**

Props are custom attributes passed from a parent component to a child component. They allow data to flow down the component hierarchy. In this example, `FaqItem` receives `question` and `answer` as props and passes them down to `FaqQuestion` and `FaqAnswer`, respectively.

By understanding and utilizing component composition, local registration, props, and dynamic rendering, you can create modular and maintainable Vue.js applications.

---

## Step 26: Custom Events with `$emit` and Passing All Properties as Props

### Code Example

- In `26-child-to-parent-communication-custom-events-$emit-and-passing-object-properties-as-props.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

  <script>
    const FaqQuestion = {
      name: "FaqQuestion",
      props: ["question"],
      methods: {
        toggle() {
          this.$emit("questionClick", {
            timestamp: new Date(),
          });
        },
      },
      template: `
        <div class="p-3 bg-dark text-light" @click="toggle">
          {{ question }}
        </div>
      `,
    };

    const FaqAnswer = {
      name: "FaqAnswer",
      props: ["answer", "show"],
      template: `
        <div class="p-3" v-show="show">
          {{ answer }}
        </div>
      `,
    };

    const FaqItem = {
      props: ["question", "answer", "initialShow"],
      name: "FaqItem",
      data() {
        return {
          show: this.initialShow,
        };
      },
      components: {
        FaqQuestion,
        FaqAnswer,
      },
      methods: {
        toggleAnswer(event) {
          this.show = !this.show;
        },
      },
      template: `
        <div class="border border-dark">
          <faq-question
            :question="question"
            @questionClick="toggleAnswer($event)"
          ></faq-question>
          <faq-answer
            :answer="answer"
            :show="show"
          ></faq-answer>
        </div>
      `,
    };

    new Vue({
      el: "#app",
      components: {
        FaqItem,
      },
      data() {
        return {
          faqData: [
            {
              id: 1,
              question: "What is Vue?",
              answer: "It is a UI library created by Evan You, to build Single Page applications",
            },
            {
              id: 2,
              question: "What is Vuex?",
              answer: "It is one of the state management libraries created by the Vue team.",
              initialShow: true,
            },
          ],
        };
      },
      template: `
        <div class="container my-5">
          <div
            v-for="faqItem of faqData"
            :key="faqItem.id"
            class="mb-4"
          >
            <faq-item
              :question="faqItem.question"
              :answer="faqItem.answer"
              :initialShow="faqItem.initialShow"
            ></faq-item>
          </div>

          <!-- Passing all properties of an object as props using v-bind -->
          <div class="mb-4" v-for="faqItem of faqData" :key="'bind-' + faqItem.id">
            <faq-item v-bind="faqItem"></faq-item>
          </div>
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **Custom Events with `$emit`**

In Vue.js, child components can communicate with parent components using custom events. The `$emit` method allows a child component to emit an event, which the parent can listen for and respond to.

**Usage:**

- **Child Component:**
  ```javascript
  this.$emit('eventName', payload);
  ```
  
Here, `'eventName'` is the name of the custom event, and `payload` is the data passed along with the event.

- **Parent Component:**
  ```html
  <child-component @event-name="handlerMethod"></child-component>
  ```
  
The parent listens for the event using the `@event-name` syntax and defines a method (`handlerMethod`) to handle the event.

**In the Code:**

- The `FaqQuestion` component emits a `questionClick` event when clicked:
  ```javascript
  this.$emit("questionClick", {
    timestamp: new Date(),
  });
  ```


- The `FaqItem` component listens for this event and toggles the visibility of the answer:
  ```html
  <faq-question
    :question="question"
    @questionClick="toggleAnswer($event)"
  ></faq-question>
  ```


This pattern facilitates communication from child to parent components, allowing for modular and maintainable code structures.

#### 2. **Passing All Properties of an Object as Props**

Vue.js provides a convenient way to pass all properties of an object as props to a component using the `v-bind` directive without an argument. This is particularly useful when dealing with components that require multiple props.

**Usage:**

- **Template:**
  ```html
  <child-component v-bind="object"></child-component>
  ```
  
This is equivalent to:
  ```html
  <child-component
    :prop1="object.prop1"
    :prop2="object.prop2"
    ...
  ></child-component>
  ```


**In the Code:**

- In the root Vue instance, the `faqData` array contains objects with multiple properties. Instead of passing each property individually, we use:
  ```html
  <faq-item v-bind="faqItem"></faq-item>
  ```


This approach simplifies the template and ensures that all relevant properties are passed to the `FaqItem` component.

---

## Step 27: Passing Functions as Props in Vue.js

### Code Example

- In `27-child-to-parent-communication-passing-function-as-prop.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

  <script>
    const FaqQuestion = {
      name: "FaqQuestion",
      props: {
        question: {
          type: String,
          required: true,
        },
        toggle: {
          type: Function,
          default: () => {},
        },
      },
      template: `
        <div class="p-3 bg-dark text-light" @click="toggle">
          {{ question }}
        </div>
      `,
    };

    const FaqAnswer = {
      name: "FaqAnswer",
      props: ["answer", "show"],
      template: `
        <div class="p-3" v-show="show">
          {{ answer }}
        </div>
      `,
    };

    const FaqItem = {
      props: ["question", "answer", "initialShow"],
      name: "FaqItem",
      data() {
        return {
          show: this.initialShow,
        };
      },
      components: {
        FaqQuestion,
        FaqAnswer,
      },
      methods: {
        toggleAnswer() {
          this.show = !this.show;
        },
      },
      template: `
        <div class="border border-dark">
          <faq-question
            :question="question"
            :toggle="toggleAnswer"
          ></faq-question>
          <faq-answer
            :answer="answer"
            :show="show"
          ></faq-answer>
        </div>
      `,
    };

    new Vue({
      el: "#app",
      components: {
        FaqItem,
      },
      data: {
        faqData: [
          {
            id: 1,
            question: "What is Vue?",
            answer: "It is a UI library created by Evan You, to build Single Page applications",
          },
          {
            id: 2,
            question: "What is Vuex?",
            answer: "It is one of the state management libraries created by the Vue team.",
            initialShow: true,
          },
        ],
      },
      template: `
        <div class="container my-5">
          <div
            v-for="faqItem of faqData"
            :key="faqItem.id"
            class="mb-4"
          >
            <faq-item
              :question="faqItem.question"
              :answer="faqItem.answer"
              :initialShow="faqItem.initialShow"
            ></faq-item>
          </div>

          <!-- Passing all properties of an object as props using v-bind -->
          <div class="mb-4" v-for="faqItem of faqData" :key="faqItem.id">
            <faq-item v-bind="faqItem"></faq-item>
          </div>
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **Passing Functions as Props**

In Vue.js, while it's technically possible to pass functions as props from a parent to a child component, it's generally considered an anti-pattern. Vue's design encourages using custom events for parent-child communication to maintain a clear and predictable data flow.

**In the Code:**

- The `FaqItem` component defines a method `toggleAnswer` that toggles the visibility of the answer.

- This method is passed as a prop named `toggle` to the `FaqQuestion` component:

  ```html
  <faq-question
    :question="question"
    :toggle="toggleAnswer"
  ></faq-question>
  ```

- The `FaqQuestion` component receives this function as a prop and invokes it when the question is clicked:

  ```html
  <div class="p-3 bg-dark text-light" @click="toggle">
    {{ question }}
  </div>
  ```

**Considerations:**

- **Pros:**

  - Allows the child component to execute parent-defined logic directly.

- **Cons:**

  - Tightly couples the child component to the parent, reducing reusability.

  - Deviates from Vue's recommended pattern of using custom events for communication.

**Recommended Approach:**

Instead of passing functions as props, Vue encourages emitting custom events from child components and handling them in parent components. This approach promotes better separation of concerns and enhances component reusability.

**Example:**

- **Child Component:**

  ```javascript
  this.$emit('toggle');
  ```

- **Parent Component:**

  ```html
  <faq-question
    :question="question"
    @toggle="toggleAnswer"
  ></faq-question>
  ```


By adopting this pattern, the child component remains agnostic of the parent's implementation details, leading to cleaner and more maintainable code.

This step highlights the importance of adhering to Vue's design principles for component communication. While passing functions as props can be convenient, leveraging custom events ensures a more robust and scalable architecture.

---

## Step 28: Scoped Slots and Named Slots in Vue.js

### Code Example

- In `28-slots-named-and-scoped.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

  <script src="../scripts/workshops.js"></script>

  <script>
    const WorkshopsList = {
      data() {
        return {
          workshops: workshops,
        };
      },
      template: `
        <div class="container my-5">
          <h1>List of workshops</h1>
          <hr />

          <div class="row">
            <div
              class="col-12 col-md-4 d-flex my-3"
              v-for="(workshop, index) of workshops"
              :key="workshop.id"
            >
              <div class="card p-3 w-100">
                <slot
                  name="header"
                  :workshopImage="workshop.imageUrl"
                  :workshopName="workshop.name"
                >
                  <img
                    :src="workshop.imageUrl"
                    :alt="workshop.name"
                    class="card-img-top"
                  />
                </slot>
                <div class="card-body">
                  <slot :workshop="workshop">
                    <h5 class="card-title">{{ workshop.name }}</h5>
                    <div
                      class="card-text"
                      v-html="workshop.description"
                    ></div>
                    <a href="#" class="btn btn-primary">Know more</a>
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    const app = new Vue({
      el: "#app",
      components: {
        WorkshopsList,
      },
      template: `
        <workshops-list>
          <template v-slot:header="w">
            <img
              :src="w.workshopImage"
              :alt="w.workshopName"
              class="card-img-top"
              style="border: 2px solid #ddd; border-radius: 50%;"
            />
          </template>

          <template v-slot="{ workshop }">
            <h5 class="card-title">
              <a target="_blank" :href="'https://workshops-server.onrender.com/workshops/' + workshop.id">
                {{ workshop.name }}
              </a>
            </h5>
            <div
              class="card-text"
              v-html="workshop.description"
            ></div>
          </template>
        </workshops-list>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **Scoped Slots**

Scoped slots allow a child component to pass data to the parent component's slot content. This provides the parent with access to the child's data when rendering slot content.

**In the Code:**

- The `WorkshopsList` component uses `v-bind` to pass `workshopImage` and `workshopName` to the `header` slot, and the entire `workshop` object to the default slot.

  ```html
  <slot
    name="header"
    :workshopImage="workshop.imageUrl"
    :workshopName="workshop.name"
  >
    <!-- Default content -->
  </slot>
  ```

  ```html
  <slot :workshop="workshop">
    <!-- Default content -->
  </slot>
  ```

- In the parent component, these props are accessed using the `v-slot` directive:

  ```html
  <template v-slot:header="w">
    <img
      :src="w.workshopImage"
      :alt="w.workshopName"
      class="card-img-top"
      style="border: 2px solid #ddd; border-radius: 50%;"
    />
  </template>
  ```

  ```html
  <template v-slot="{ workshop }">
    <h5 class="card-title">
      <a target="_blank" :href="'https://workshops-server.onrender.com/workshops/' + workshop.id">
        {{ workshop.name }}
      </a>
    </h5>
    <div
      class="card-text"
      v-html="workshop.description"
    ></div>
  </template>
  ```


This setup allows the parent to customize the rendering of each workshop's header and body using data provided by the child component.

#### 2. **Named Slots**

Named slots enable a child component to define multiple slots, each identified by a unique name. The parent component can then provide content for each named slot.

**In the Code:**

- The `WorkshopsList` component defines a named slot called `header`:

  ```html
  <slot
    name="header"
    :workshopImage="workshop.imageUrl"
    :workshopName="workshop.name"
  >
    <!-- Default content -->
  </slot>
  ```

- The parent component provides content for the `header` slot using the `v-slot` directive with the slot name:

  ```html
  <template v-slot:header="w">
    <!-- Custom header content -->
  </template>
  ```


By using named slots, the parent component can selectively override specific parts of the child component's template, enhancing flexibility and reusability.


This step demonstrates how **scoped slots** and **named slots** can be utilized in Vue.js to create highly customizable and reusable components. By allowing parent components to inject content and access child component data, developers can build flexible UIs that adapt to various contexts.

---

## Step 29: Two-Way Binding with `.sync` Modifier in Vue.js

### Code Example

- In `29-sync-modifier-2-way-data-binding-in-custom-components.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Vue</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js"></script>

  <script>
    const ChildComponent = {
      name: "ChildComponent",
      props: {
        title: String,
      },
      data() {
        return {
          tempTitle: this.title,
        };
      },
      template: `
        <div>
          <div>Title is {{ title }}</div>

          <div class="mb-3">
            <label for="newTitle" class="col-2 form-label col-form-label">New title</label>
            <div class="col-10">
              <input
                type="text"
                v-model="tempTitle"
                id="newTitle"
                class="form-control"
              />
            </div>
          </div>

          <button class="btn btn-sm btn-primary" @click="$emit('update:title', tempTitle)">Update title</button>
        </div>
      `,
    };

    const ParentComponent = {
      name: "ParentComponent",
      components: {
        ChildComponent,
      },
      data() {
        return {
          title: "John's Den",
        };
      },
      template: `
        <div>
          <child-component v-bind:title.sync="title"></child-component>
        </div>
      `,
    };

    new Vue({
      el: "#app",
      components: {
        ParentComponent,
      },
      template: `
        <div class="container my-5">
          <parent-component></parent-component>
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **`.sync` Modifier for Two-Way Binding**

In Vue.js, the `.sync` modifier provides a shorthand for creating two-way bindings between parent and child components. It allows a parent to pass a prop to a child and automatically update the parent's data when the child emits an event to modify that prop.

**How It Works:**

- **Parent Component:**

  ```html
  <child-component v-bind:title.sync="title"></child-component>
  ```

  
This is syntactic sugar for:

  ```html
  <child-component
    :title="title"
    @update:title="title = $event"
  ></child-component>
  ```

- **Child Component:**

  ```javascript
  this.$emit('update:title', newValue);
  ```

  
Here, the child emits an `update:title` event with the new value, which the parent listens to and uses to update its `title` data property.

This pattern simplifies the code by reducing the need for explicit event listeners in the parent component.

#### 2. **Using a Temporary Data Property in Child Component**

In the child component, a temporary data property `tempTitle` is initialized with the value of the `title` prop:

```javascript
data() {
  return {
    tempTitle: this.title,
  };
}
```


This approach allows the child to manage its own internal state (`tempTitle`) without directly mutating the prop (`title`). Directly modifying props within a child component is discouraged in Vue.js, as props are meant to be immutable from the child's perspective.

By using a temporary data property, the child can handle user input and emit updates to the parent when necessary, adhering to Vue's one-way data flow principle.


This step demonstrates how to implement two-way data binding between parent and child components using the `.sync` modifier in Vue.js. It also highlights best practices for managing props and internal state within components.

---

## Step 30: Advanced Attribute Handling and v-model Implementation for custom input components

### Code Example

- In `30-$attrs-custom-input-v-model-binding.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Vue Demo Template</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
  />
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

    const BaseInput = {
      inheritAttrs: false,
      props: ["label"],
      template: `
        <label>
          {{ label }}
          <input
            :value="$attrs.value"
            v-bind="$attrs"
            v-on:input="$emit('input', $event.target.value)"
          >
        </label>
      `,
    };

    new Vue({
      el: "#app",
      components: {
        BaseInput,
      },
      data: {
        name: "John Doe",
      },
      template: `
        <div id="app">
          <base-input
            label="Your name"
            required="true"
            placeholder="Your name"
            v-model="name"
          /> 
          {{name}}
        </div>
      `,
    });
  </script>
</body>
</html>
```

---

### New Concepts Introduced

#### 1. **`inheritAttrs: false`**

By default, Vue automatically applies any attributes not recognized as props to the root element of a component. However, when you set `inheritAttrs: false` in a component's options, Vue will not apply these attributes automatically. Instead, you gain full control over where and how these attributes are applied within your component.

**Use Case:**

This is particularly useful when you want to apply attributes to a specific element within your component rather than the root element. For example, in the `BaseInput` component, we want to apply attributes like `required` and `placeholder` directly to the `<input>` element, not the wrapping `<label>`.

#### 2. **`$attrs`**

The `$attrs` object contains all the attributes passed to a component that are not explicitly declared as props. This includes attributes like `required`, `placeholder`, and even event listeners. By using `v-bind="$attrs"`, you can apply all these attributes to a specific element within your component.

**Example:**

```html
<input
  :value="$attrs.value"
  v-bind="$attrs"
  v-on:input="$emit('input', $event.target.value)"
>
```


In this example, all attributes not declared as props are bound to the `<input>` element, ensuring they are applied correctly.

#### 3. **Custom `v-model` Implementation**

In Vue, `v-model` is syntactic sugar for binding a value prop and listening for an input event. When creating custom input components, you can implement `v-model` by:

- Binding the input's value to the passed-in value using `:value="$attrs.value"`.

- Emitting an `input` event with the new value when the input changes using `v-on:input="$emit('input', $event.target.value)"`.

This setup ensures that the parent component's data stays in sync with the custom input component's value.


By understanding and utilizing `inheritAttrs: false`, `$attrs`, and custom `v-model` implementations, you can create flexible and reusable components that handle attributes and data binding effectively.

---

### Step 31: Rendering Components Inside Table Elements Using the `is` Attribute

### Code

- In `31-the-is-attribute.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The "is" attribute</title>
    </head>
    <body>
        <div id="root">
            <!-- does not render properly -->
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    <TodoListItem
                        v-for="todo in todos"
                        v-bind:key="todo.id"
                        v-bind:todo="todo"
                    >
                    </TodoListItem>
                </tbody>
            </table>

            <!-- renders fine -->
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        is="TodoListItem"
                        v-for="todo in todos"
                        v-bind:key="todo.id"
                        v-bind:todo="todo"
                    ></tr>
                </tbody>
            </table>
        </div>

        <script type="module">
            /**
             * only a tr can be a child of tbody/table, only li can be a child of ul/ol etc. This leads to eviction of any other elements within table / ul / ol etc.
             *
             * This is a limitation of only DOM templating and NOT template string (template property in component), single-file i.e. *.vue file templates.
             *
             * The "is" attribute helps in such scenarios.
             */
            import Vue from "https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.14/vue.esm.browser.js";

            const TodoListItem = {
                name: "TodoListItem",
                props: ["todo"],
                template: `
                    <tr>
                        <td>{{todo.text}}</td>
                        <td>{{todo.done ? 'YES' : 'NO'}}</td>
                    </tr>
                `,
            };

            new Vue({
                el: "#root",
                components: {
                    TodoListItem,
                },
                data: {
                    todos: [
                        { id: 1, text: "Apply for leave", done: true },
                        { id: 2, text: "Plan vacation", done: false },
                        { id: 3, text: "Learn Vue", done: true },
                    ],
                },
            });
        </script>
    </body>
</html>
```

When working with Vue.js, integrating custom components within HTML table structures can lead to rendering issues due to the strict content model of certain HTML elements. For instance, placing a custom component directly inside a `<table>` or `<tbody>` can result in the component being rendered outside of the table, disrupting the intended layout.

#### The Challenge

HTML enforces specific rules about which elements can be nested within others. For example, only `<tr>` elements are valid children of `<tbody>`, and only `<td>` or `<th>` elements are valid children of `<tr>`. When a custom Vue component is used in place of these expected elements, the browser's HTML parser may not recognize them as valid, leading to unexpected rendering behavior. This is particularly problematic when using in-DOM templates, where the browser parses the HTML before Vue has a chance to process it.

#### The Solution: Using the `is` Attribute

Vue provides a special `is` attribute that allows you to specify which component should be rendered in place of a standard HTML element. By using this attribute, you can ensure that your custom component is rendered correctly within the table structure.

Here's how you can apply it:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr
      is="TodoListItem"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></tr>
  </tbody>
</table>
```


In this example, the `TodoListItem` component will be rendered in place of each `<tr>` element, ensuring that the table structure remains valid and the components are displayed as intended.

#### Additional Considerations

- **Component Templates**: Ensure that your component templates match the expected HTML structure. For instance, a component intended to replace a `<tr>` should have a `<tr>` as its root element.

- **Browser Parsing**: Remember that this issue primarily arises with in-DOM templates. When using single-file components or string templates, Vue handles the parsing, and this problem is less likely to occur.

- **Vue Version**: The `is` attribute is supported in Vue 2.x and Vue 3.x, but always refer to the official documentation for the version you're using to ensure compatibility.

By understanding and utilizing the `is` attribute, you can effectively integrate custom components within HTML tables, maintaining both the integrity of the table structure and the functionality of your Vue components. 

---

## Step 32: Introducing Dynamic Components

### Code

- In `32-dynamic-components.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dynamic components - "is" attribute</title>
        <style>
            * {
                box-sizing: border-box;
            }

            .tab-button {
                padding: 6px 10px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                border: 1px solid #ccc;
                cursor: pointer;
                background: #f0f0f0;
                margin-bottom: -1px;
                margin-right: -1px;
            }

            .tab-button:hover {
                background: #e0e0e0;
            }

            .tab-button.active {
                background: #e0e0e0;
            }

            .tab {
                border: 1px solid #ccc;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div id="app"></div>

        <script type="module">
            import Vue from "https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.14/vue.esm.browser.js";

            /**
             * A component may be chosen dynamically for rendering using <component :is="component-name" />
             * This is useful when the chosen are not limited for what should take the place of component (eg. components for different kinds of advertisements on a web page).
             *
             * Step 1: Define 3 components with a simple template (a message will do), and register them globally
             * - tab-home
             * - tab-posts
             * - tab-archive
             *
             * Step 2: In the root instances define as data
             * {
                    currentTab: "Home",
                    tabs: ["Home", "Posts", "Archive"]
               }
             * The template consists of the tabs defined as buttons (iterate and show them). The button on click sets the currentTab. The current tab is given class 'active'
             *
             * Step 3: Add a <component :is="currentTabComponent" class="tab"> below the tabs. A computed currentTabComponent property sets the name of the current tab, and component shows it.
             */

            const AppMessage = {
                name: "AppMessage",
                template: `
                    <div>Hello world</div>
                `,
            };

            const AppInput = {
                name: "AppInput",
                template: `
                    <input type="text" />
                `,
            };

            Vue.component("AppMessage", AppMessage);
            Vue.component("AppInput", AppInput);

            new Vue({
                el: "#app",
                data: {
                    componentToShow: "AppMessage",
                },
                template: `
                    <div>
                        <!--
                            Dynamic component rendering can be used when there are too many kinds of components to show dynamically, or the component to show cannot be determined at compile (when writing code) by the parent component

                            This can be helpful for example when showing Ads - each kind of Ad can be defined by a separate component, and  there many be many such Ad components
                        -->
                        <component :is="componentToShow" />
                        <button @click="componentToShow = 'AppInput'">Change to input</button>
                        <button @click="componentToShow = 'AppMessage'">Change to message</button>
                    </div>
                `,
            });
        </script>
    </body>
</html>
````

Dynamic components in Vue.js allow you to render different components based on runtime conditions, enhancing flexibility and reusability in your application. This is particularly useful in scenarios like tabbed interfaces, form wizards, or dashboards where the displayed component changes based on user interaction or application state.

#### How It Works

Vue provides a built-in `<component>` element that can dynamically render a component specified by the `is` attribute. The value of `is` can be a string corresponding to the name of a registered component or a component object itself.

Here's an example:

```html
<component :is="currentComponent"></component>
```

In this snippet, `currentComponent` is a data property that determines which component to render. Changing its value will dynamically switch the rendered component.

#### Practical Example

Consider an application with two components: `AppMessage` and `AppInput`. You can switch between them using buttons:

```html
<template>
  <div>
    <component :is="componentToShow" />
    <button @click="componentToShow = 'AppInput'">Show Input</button>
    <button @click="componentToShow = 'AppMessage'">Show Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentToShow: 'AppMessage',
    };
  },
  components: {
    AppMessage,
    AppInput,
  },
};
</script>
```

In this setup, clicking the buttons updates `componentToShow`, which in turn changes the component rendered by `<component :is="componentToShow" />`.

#### Benefits of Dynamic Components

- **Flexibility**: Easily switch between components without complex conditional rendering.
- **Reusability**: Use the same dynamic component logic to render different components as needed.
- **Cleaner Templates**: Avoid cluttering templates with multiple `v-if` or `v-show` directives.

#### Preserving Component State

By default, when switching between dynamic components, Vue destroys the previous component instance. To preserve the state of inactive components, wrap the dynamic component with `<keep-alive>`:


```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```


This ensures that inactive components are cached and their state is maintained when they are reactivated.

Dynamic components are a powerful feature in Vue.js that, when used appropriately, can lead to more maintainable and scalable applications. 

---

## Step 33: Preserving Component State with `<keep-alive>`

### Code Example

- In `33-keep-alive-for-preserving-component-state.html`

This example demonstrates how to use Vue's `<keep-alive>` component to maintain the state of dynamic components, such as tabs or panels, when switching between them.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dynamic Components with keep-alive</title>
    <style>
      .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        border: 1px solid #ccc;
        padding: 10px;
      }
      .panel {
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .panel-title,
      .panel-content {
        padding: 1em;
      }
      .panel-title {
        background-color: #e0e0e0;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
    <script>
      Vue.component("collapsible-panel", {
        props: {
          title: String,
          content: String,
        },
        data() {
          return {
            show: true,
          };
        },
        methods: {
          toggle() {
            this.show = !this.show;
          },
        },
        template: `
          <div class="panel">
            <div class="panel-title" @click="toggle">{{ title }}</div>
            <div class="panel-content" v-if="show">{{ content }}</div>
          </div>
        `,
      });

      Vue.component("tab-home", {
        template: "<div>Home component</div>",
      });

      Vue.component("tab-posts", {
        data() {
          return {
            posts: [
              {
                id: 1,
                title: "What is Vue?",
                content: "A library to build frontend SPAs",
              },
              {
                id: 2,
                title: "What is Vue Router?",
                content: "A routing library used with Vue.js",
              },
              {
                id: 3,
                title: "What is Vuex?",
                content: "A state-management library used with Vue.js",
              },
            ],
          };
        },
        template: `
          <div>
            <collapsible-panel
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              :content="post.content"
            />
          </div>
        `,
      });

      Vue.component("tab-archive", {
        template: "<div>Archive component</div>",
      });

      new Vue({
        el: "#root",
        data: {
          currentTab: "Home",
          tabs: ["Home", "Posts", "Archive"],
        },
        computed: {
          currentTabComponent() {
            return "tab-" + this.currentTab.toLowerCase();
          },
        },
        template: `
          <div>
            <button
              v-for="tab in tabs"
              :key="tab"
              :class="['tab-button', { active: currentTab === tab }]"
              @click="currentTab = tab"
            >
              {{ tab }}
            </button>

            <keep-alive>
              <component :is="currentTabComponent" class="tab"></component>
            </keep-alive>
          </div>
        `,
      });
    </script>
  </body>
</html>
```

---

### New Concepts Introduced

#### 1. **Dynamic Components with `<component :is="...">`**

Vue's `<component>` element allows for dynamic rendering of components based on the value provided to the `is` attribute. This is particularly useful for scenarios like tabbed interfaces, where the displayed component changes based on user interaction.

**Example:**

```html
<component :is="currentTabComponent" class="tab"></component>
```


Here, `currentTabComponent` determines which component to render, such as `tab-home`, `tab-posts`, or `tab-archive`.

#### 2. **Preserving Component State with `<keep-alive>`**

By default, when switching between dynamic components, Vue destroys the inactive component and creates a new instance of the active one. This behavior can lead to loss of state, such as user inputs or toggled panels.

Wrapping dynamic components with `<keep-alive>` instructs Vue to cache the inactive components instead of destroying them. This means their state is preserved, and they are reactivated when needed.

**Example:**

```html
<keep-alive>
  <component :is="currentTabComponent" class="tab"></component>
</keep-alive>
```


In the provided code, without `<keep-alive>`, toggling panels in the "Posts" tab and switching to another tab would reset the panels' open/closed state upon returning. With `<keep-alive>`, the state of each panel is maintained across tab switches.

#### 3. **Lifecycle Hooks: `activated` and `deactivated`**

Components wrapped with `<keep-alive>` have access to two additional lifecycle hooks:

- **`activated()`**: Called when a kept-alive component is inserted into the DOM.

- **`deactivated()`**: Called when a kept-alive component is removed from the DOM.

These hooks are useful for managing side effects or resources when components are activated or deactivated.

---

### Summary

In this step, we've explored how to use Vue's `<keep-alive>` component to preserve the state of dynamic components. This is especially beneficial in applications where maintaining user inputs, toggled states, or other component-specific data is crucial for a seamless user experience.

By wrapping dynamic components with `<keep-alive>`, Vue caches inactive components, ensuring their state is retained when they become active again.

---

