# Learning Angular 🚀

Welcome to your Angular learning adventure! This README is designed to help you learn Angular in a structured and enjoyable way. Get ready to dive into the world of frontend development with this powerful framework.

---

## **What is Angular?**
Angular is a TypeScript-based web development framework created by Google. It's perfect for building dynamic and scalable web applications thanks to its modular approach, built-in tools, and strong typing.

### **Key Features:**
- **Components:** Angular splits applications into reusable components.
- **Two-way Data Binding:** Automatic synchronization between the UI and data model.
- **Directives:** Add dynamic logic to your HTML templates.
- **Dependency Injection:** Efficient dependency management.
- **Router:** Smooth navigation between views.

---

## **How to Use This Repository**

This repository is your playground for practicing and experimenting with Angular. Follow the sections below to learn progressively.

### **1. Initial Setup**

1. **Clone this repository:**
   ```bash
   git clone <REPO_URL>
   cd <DIRECTORY_NAME>
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve -o
   ```
   This will open your app in the browser at [http://localhost:4200](http://localhost:4200).

---

### **2. Basic Structure of Angular**

Angular organizes your app into modules, components, and services. Here are the key directories and files:

- **src/app:** Contains the main components, modules, and services.
- **src/assets:** Static files like images and global styles.
- **angular.json:** Project configuration.

#### **An Overview of a Component:**

Every component consists of:
- **HTML** for the view.
- **SCSS** for the styles.
- **TypeScript** for the logic.

Example:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, Angular!';
}
```

---

### **3. Missions to Learn Angular**

Complete these missions to progress in your learning journey:

#### **Mission 1: Create a Custom Component**
- Use the CLI to generate a new component:
  ```bash
  npm run ng generate component my-component
  ```
- Customize the HTML and TypeScript to display a unique message.

#### **Mission 2: Create a Service to Manage Data**
- Generate a service:
  ```bash
  npm run ng generate service my-service
  ```
- Simulate data and use it in a component.

#### **Mission 3: Implement the Router**
- Define routes in your app module.
- Navigate between components using `<router-outlet>`.

#### **Mission 4: Use Directives**
- Use `*ngFor` and `*ngIf` to manipulate the DOM dynamically.

---

### **4. Learning with Udemy**

This repository follows the **Udemy course by Fernando Herrera**. The course covers a comprehensive range of topics, including:

- Hello World in Angular
- Components
- Directives
- Services
- Modules
- All Angular Pipes
- Routing
- Child Routes
- Lazy Loading Modules
- Guards
- Route Protection
- JWT Authentication
- Maps
- Using Angular Libraries
- Using Non-Angular Libraries
- API Consumption
- CRUD Operations
- SPA Development
- Git and GitHub
- Deployment to Production
- MongoDB
- Node.js
- Reusable Components, Directives, and Services
- Communication between Components and Modules
- Reactive Extensions
- PrimeNG
- Material Design
- Bootstrap
- Tailwind CSS
- Defer, Triggers, Signals
- Writable and Computed Signals
- Effects
- Standalone Components
- And much more!

If you want to explore the TypeScript fundamentals that are also part of this course, check out my previous repository  [intro_typescript](<https://github.com/caindra/intro_typescript>) for a solid foundation.

---

### **5. Useful Resources**

- [Official Angular Documentation](https://angular.io/docs)
- [Tour of Heroes](https://angular.io/tutorial): Interactive official tutorial.
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [API Reference](https://angular.io/api)

---

### **6. What’s Next?**

Angular has a massive ecosystem. Here are some advanced areas to explore:

- **Lazy Loading:** Load modules on demand for better performance.
- **RxJS:** Handle reactive data streams.
- **Testing:** Learn to test your applications with Jasmine and Karma.
- **SSR (Server-Side Rendering):** Improve SEO and initial performance.

---

## **Share Your Progress!**

If you build something cool while practicing, share it! Commit to this repository, open a Pull Request, or simply show it off on social media by tagging your projects with #LearningAngular.

Happy coding! 💻✨
