```mermaid { theme: 'base' }
sequenceDiagram
  Browser->>+VueRouter: Request route
  alt Wildcard route
    rect rgba(65, 184, 131, 1)
      VueRouter->>+DruxtRouter: Fallback to DruxtRouter
      DruxtRouter->>+druxtRouterStore: getRoute()
      alt MISS
        rect rgba(6, 120, 190, 1)
          druxtRouterStore->>+Decoupled Router: /router/translate-path?path=
          Decoupled Router->>-druxtRouterStore: Resolved route
        end
      end
      druxtRouterStore->>-DruxtRouter: Resolved route
      DruxtRouter->>-VueRouter: Resolved component
    end
    VueRouter->>-Browser: Return page
  end
```

<!--
This is provided via the DruxtRouter module, which uses Drupals Deocupled Router module to determine the JSON:API resource and Druxt component to render.

The route data is cached in the druxtRouter vuex store, reducing queries to the Drupal backend.
-->
