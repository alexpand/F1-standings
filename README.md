# F1 - Standings

## Introduction


 F1-Standings is a cutting-edge web application designed to provide Formula 1 enthusiasts with access to comprehensive race standings, driver statistics. Leveraging the power of Vue.js, Vite, Cypress, Ergast API, and Pinia. 
 
 Key Features: 

 1. **Interactive User Interface**: The Vue.js framework enables the creation of a highly responsive and intuitive user interface. Users can easily navigate through different sections, view detailed statistics. 
 
 1. **Fast and Efficient**: Powered by Vite, F1-Standings delivers exceptional performance by leveraging modern JavaScript tooling. With lightning-fast load times and efficient code bundling, users can access the desired information without any delay.
 
 1. **End-to-End Testing with Cypress**: Every aspect of the application undergoes e2e testing to maintain its reliability. 
 
 1. **State Management with Pinia**: Managing application state is simplified with Pinia, offering a robust and scalable solution for state management within Vue.js applications.

 
 1. **Responsive Design**: Whether accessed from a desktop, tablet, or smartphone, the web application adapts effortlessly to different screen sizes, ensuring usability and accessibility for all users. 

 1. **Favorites**: You can select your favorites drivers, constructors and circuits and have them in your favorites page. 


## Getting Started

Clone repository
```bash
git clone git@github.com:alexpand/F1-standings.git
cd F1-standings.github.io
npm install
```

Running project
```bash
npm run dev
```

## Testing

Running tests CLI
```bash
npm run test
```

Running tests in UI window
```bash
npm run test:ui
```

## Structure

- **cypress**: contains testing files

- **src**
  - **api**: contains files for api calls
  - **assets**: contains images and styles
  - **components**: contains components used in several views
  - **composables**: contains reusable functions
  - **config**: contains default settings
  - **lang**: contains language files
  - **router**: contains router configuration
  - **store**: contains store files
  - **views**: contains all views files

## Api Doc

All data are from [Ergast Api](http://ergast.com/mrd/)