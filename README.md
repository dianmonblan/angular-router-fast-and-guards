![Community Fest and Code](https://www.comfeco.com/images/logo.svg)


> El valor de un hombre debe medirse por lo que da y no por lo que recibe. No trates de convertirte en un hombre de éxito sino en un hombre de valores **- Albert Einstein**


![Angular](https://angular.io/assets/images/logos/angular/angular.svg)

# RUTAS Y GUARDIAS

Implementa el servicio Angular Router, que permite la navegación de una vista a la siguiente a medida que los usuarios realizan tareas de la aplicación.

> [Divide y vencerás](https://es.wikipedia.org/wiki/Divide_y_vencer%C3%A1s)

## CREACIÓN, INSTALACIÓN Y PUESTA EN MARCHA DE NUESTRO ESPACIO DE TRABAJO Y APLICACIÓN [ANGULAR](https://angular.io/)
1. Verificando la existencia de nuestra herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng`
2. Versión de nuestro de nuestra herramienta de comandos [Angular CLI](https://cli.angular.io/) ejecutando el comando `ng version`
3. Solicitando ayuda a nuestra herramienta de comandos [Angular CLI](https://cli.angular.io/) haciendo uso del comando `ng help`
4. Obtener información detallada de como crear nuestro espacio de trabajo para la aplicación mediante la herramienta de comandos [Angular CLI](https://cli.angular.io/) con el comando `ng new --help`
5. Creando nuestro espacio de trabajo para la aplicación ejecutando el comando `ng new router-fast-and-guards` haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/)
    1. _? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace? This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/strict (y/N)_ **N**
    2. _? Would you like to add Angular routing? (y/N)_ **y**
    3. _? Which stylesheet format would you like to use?_ **CSS**
    4. 😴 **¡Calma¡** NO desesperemos falta poco
6. Ingresar al espacio de trabajo creado mediante el comando `cd router-fast-and-guards`
7. Corriendo nuestra aplicación sobre el entorno de desarrollo lanzando el comando `ng serve` haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/)
    1. _? Would you like to share anonymous usage data about this project with the Angular Team at Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more details and how to change this setting, see http://angular.io/analytics. (y/N)_ **N**
	2. 😴 **¡Calma¡** NO desesperemos falta poco
	3. **✔ Compiled successfully** abriremos una prestaña de nuestro navegador web e ingresaremos a la dirección `http://localhost:4200` **!Lo hemos conseguido ya tenemos nuestra aplicación en modo 🚀¡**

**Sugerencias:**
- Obtener información detallada de como crear y correr nuestra aplicación mediante la herramienta de comandos [Angular CLI](https://cli.angular.io/) ejecuanto el comando `ng serve --help`
- Corriendo nuestra aplicación y abriendo el enlace a nuestro aplicación sobre una pestaña del navegador web predeterminado de nuestro sistema operativo sobre el entorno de desarrollo lanzando el comando `ng serve --open` haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/)

## [RUTAS](https://angular.io/api/router)
1. Creación de módulo **user-profile** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/user-profile --module=app --route=user-profile --routing --routing-scope=Child`
    1. Ingresamos a la dirección `http://localhost:4200/user-profile` sobre nuestra navegador web para ver el módulo **user-profile**
2. Creación de módulo **distinctive** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/distinctive --module=app --route=distinctive --routing --routing-scope=Child`
    1. Ingresamos a la dirección `http://localhost:4200/distinctive` sobre nuestra navegador web para ver el módulo **distinctive**
3. Creación de módulo **groups** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/groups --module=app --route=groups --routing --routing-scope=Child`
    1. Ingresamos a la dirección `http://localhost:4200/groups` sobre nuestra navegador web para ver el módulo **groups**
    2. Creación de submódulo **angular** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/groups/submodules/angular --module=/modules/groups --route=angular --routing --routing-scope=Child`
        1. Ingresamos a la dirección `http://localhost:4200/groups/angular` sobre nuestra navegador web para ver el submódulo **angular**
	3. Creación de submódulo **react** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/groups/submodules/react --module=/modules/groups --route=react --routing --routing-scope=Child`
        1. Ingresamos a la dirección `http://localhost:4200/groups/react` sobre nuestra navegador web para ver el submódulo **react**
	4. Creación de submódulo **vue** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/groups/submodules/vue --module=/modules/groups --route=vue --routing --routing-scope=Child`
		1. Ingresamos a la dirección `http://localhost:4200/groups/vue` sobre nuestra navegador web para ver el submódulo **vue**
	5. Creación de submódulo **svelte** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/groups/submodules/svelte --module=/modules/groups --route=svelte --routing --routing-scope=Child`
		1. Ingresamos a la dirección `http://localhost:4200/groups/svelte` sobre nuestra navegador web para ver el submódulo **svelte**
	6. Convirtiendo submódulos **angular, react, vue, svelte** en rutas hijas de **groups**
		1. Integración de etiqueta `<router-outlet></router-outlet>` sobre fichero **HTML** `src/app/modules/groups/groups.component.html`
		2. Moviendo rutas de _"submódulos"_ del _"módulo"_ **groups** sobre fichero de rutas `src/app/modules/groups/groups-routing.module.ts` haciendo uso de la propiedad children de la ruta padre declarada
		```javascript
			const routes: Routes = [{
				path: '', component: GroupsComponent,
				children: [{ path: 'angular', loadChildren: () => import('./submodules/angular/angular.module').then(m => m.AngularModule) }, { path: 'react', loadChildren: () => import('./submodules/react/react.module').then(m => m.ReactModule) }, { path: 'vue', loadChildren: () => import('./submodules/vue/vue.module').then(m => m.VueModule) }, { path: 'svelte', loadChildren: () => import('./submodules/svelte/svelte.module').then(m => m.SvelteModule) }]
			}];
		```
		3. Navegando _"submódulos"_ del _"módulo"_ **groups**
			1. Ingresamos a la dirección `http://localhost:4200/groups/angular` sobre nuestra navegador web para ver el submódulo **angular**
			2. Ingresamos a la dirección `http://localhost:4200/groups/react` sobre nuestra navegador web para ver el submódulo **react**
			3. Ingresamos a la dirección `http://localhost:4200/groups/vue` sobre nuestra navegador web para ver el submódulo **vue**
			4. Ingresamos a la dirección `http://localhost:4200/groups/svelte` sobre nuestra navegador web para ver el submódulo **svelte**
4. Creación de módulo **events** haciendo uso de la herramienta de comandos [Angular CLI](https://cli.angular.io/) mediante el comando `ng generate module /modules/events --module=app --route=events --routing --routing-scope=Child`
    1. Ingresamos a la dirección `http://localhost:4200/events` sobre nuestra navegador web para ver el módulo **events**

### [CONECTANDO RUTAS MEDIANTE DIRECTIVAS SOBRE ENLACES HTML](https://angular.io/api/router#directives)
1. Implementación de enlaces para navegar por los diferentes módulos padres **user-profile, distinctive, groups, events** sobre fichero **HTML** `src/app/app.component.html` haciendo uso de la directiva **[routerLink](https://angular.io/api/router/RouterLink)** y directiva **[routerLinkActive](https://angular.io/api/router/RouterLinkActive)** encargada de agregar una clase al enlace activo.
```css
  .card-container .card:not(.highlight-card):hover, .card-container .card.active {
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
  }
```
```html
<div class="card-container">
	<a class="card card-small" routerLink="/user-profile" routerLinkActive="active">
		<span>User profile</span>
	</a>
  
	<a class="card card-small" routerLink="/distinctive" routerLinkActive="active">
		<span>Distinctive</span>
	</a>
  
	<a class="card card-small" routerLink="/groups" routerLinkActive="active">
		<span>Groups</span>
	</a>
  
	<a class="card card-small" routerLink="/events" routerLinkActive="active">
		<span>Events</span>
	</a>
</div>
```
2. Implementación de enlaces para navegar por los diferentes submódulos hijos **angular, react, vue, svelt** del módulo padre **groups** sobre fichero **HTML** `src/app/modules/groups/groups.component.html` haciendo uso de la directiva **[routerLink](https://angular.io/api/router/RouterLink)** y directiva **[routerLinkActive](https://angular.io/api/router/RouterLinkActive)** encargada de agregar una clase al enlace activo.
```css
<style>
    :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 8px 0;
    }

    p {
        margin: 0;
    }

    .spacer {
        flex: 1;
    }

    .toolbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #1976d2;
        color: white;
        font-weight: 600;
    }

    .toolbar img {
        margin: 0 16px;
    }

    .toolbar #twitter-logo {
        height: 40px;
        margin: 0 16px;
    }

    .toolbar #twitter-logo:hover {
        opacity: 0.8;
    }

    .content {
        display: flex;
        margin: 82px auto 32px;
        padding: 0 16px;
        max-width: 960px;
        flex-direction: column;
        align-items: center;
    }

    svg.material-icons {
        height: 24px;
        width: auto;
    }

    svg.material-icons:not(:last-child) {
        margin-right: 8px;
    }

    .card svg.material-icons path {
        fill: #888;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 16px;
    }

    .card {
        border-radius: 4px;
        border: 1px solid #eee;
        background-color: #fafafa;
        height: 40px;
        width: 200px;
        margin: 0 8px 16px;
        padding: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        line-height: 24px;
    }

    .card-container .card:not(:last-child) {
        margin-right: 0;
    }

    .card.card-small {
        height: 16px;
        width: 168px;
    }

    .card-container .card:not(.highlight-card) {
        cursor: pointer;
    }

    .card-container .card:not(.highlight-card):hover, .card-container .card.active {
        transform: translateY(-3px);
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    }

    .card-container .card:not(.highlight-card):hover .material-icons path {
        fill: rgb(105, 103, 103);
    }

    .card.highlight-card {
        background-color: #1976d2;
        color: white;
        font-weight: 600;
        border: none;
        width: auto;
        min-width: 30%;
        position: relative;
    }

    .card.card.highlight-card span {
        margin-left: 60px;
    }

    svg#rocket {
        width: 80px;
        position: absolute;
        left: -10px;
        top: -24px;
    }

    svg#rocket-smoke {
        height: calc(100vh - 95px);
        position: absolute;
        top: 10px;
        right: 180px;
        z-index: -10;
    }

    a,
    a:visited,
    a:hover {
        color: #1976d2;
        text-decoration: none;
    }

    a:hover {
        color: #125699;
    }

    .terminal {
        position: relative;
        width: 80%;
        max-width: 600px;
        border-radius: 6px;
        padding-top: 45px;
        margin-top: 8px;
        overflow: hidden;
        background-color: rgb(15, 15, 16);
    }

    .terminal::before {
        content: "\2022 \2022 \2022";
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        background: rgb(58, 58, 58);
        color: #c2c3c4;
        width: 100%;
        font-size: 2rem;
        line-height: 0;
        padding: 14px 0;
        text-indent: 4px;
    }

    .terminal pre {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        color: white;
        padding: 0 1rem 1rem;
        margin: 0;
    }

    .circle-link {
        height: 40px;
        width: 40px;
        border-radius: 40px;
        margin: 8px;
        background-color: white;
        border: 1px solid #eeeeee;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: 1s ease-out;
    }

    .circle-link:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    }

    footer {
        margin-top: 8px;
        display: flex;
        align-items: center;
        line-height: 20px;
    }

    footer a {
        display: flex;
        align-items: center;
    }

    .github-star-badge {
        color: #24292e;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 3px 10px;
        border: 1px solid rgba(27, 31, 35, .2);
        border-radius: 3px;
        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
        margin-left: 4px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    }

    .github-star-badge:hover {
        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
        border-color: rgba(27, 31, 35, .35);
        background-position: -.5em;
    }

    .github-star-badge .material-icons {
        height: 16px;
        width: 16px;
        margin-right: 4px;
    }

    svg#clouds {
        position: fixed;
        bottom: -160px;
        left: -230px;
        z-index: -10;
        width: 1920px;
    }

    /* Responsive Styles */
    @media screen and (max-width: 767px) {

        .card-container>*:not(.circle-link),
        .terminal {
            width: 100%;
        }

        .card:not(.highlight-card) {
            height: 16px;
            margin: 8px 0;
        }

        .card.highlight-card span {
            margin-left: 72px;
        }

        svg#rocket-smoke {
            right: 120px;
            transform: rotate(-5deg);
        }
    }

    @media screen and (max-width: 575px) {
        svg#rocket-smoke {
            display: none;
            visibility: hidden;
        }
    }
</style>
```
```html
<div class="card-container">
	<a class="card card-small" routerLink="/groups/angular" routerLinkActive="active">
		<span>Angular</span>
	</a>
  
	<a class="card card-small" routerLink="/groups/react" routerLinkActive="active">
		<span>React</span>
	</a>
  
	<a class="card card-small" routerLink="/groups/vue" routerLinkActive="active">
		<span>Vue</span>
	</a>
  
	<a class="card card-small" routerLink="/groups/svelte" routerLinkActive="active">
		<span>Svelte</span>
	</a>
</div>
```

## RECURSOS DE APOYO

### Nicolas Molina
[Aplicando Lazy Loading en Angular](https://www.youtube.com/watch?v=KI6xyeyMCSo)
[Precargando módulos en Angular](https://www.youtube.com/watch?v=db2VunrvVKs)
[Usando Quicklink para precargar contenido en sitios web](https://www.youtube.com/watch?v=8WtnJ9EgyDU)

### Angular University
[Angular Router](https://www.youtube.com/watch?v=VES1eTNxi1s&list=PLOa5YIicjJ-VA38pChXHhq8jY2U8iYynr)
[Angular Router In Depth](https://www.youtube.com/watch?v=lr8fmg1pgM0&list=PLOa5YIicjJ-VpOOoLczAGTLEEznZ2JEa6)
