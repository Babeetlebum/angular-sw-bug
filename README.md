# AngularSwBug

- `yarn build --watch`
- `docker-compose up --build`
- open browser at http://localhost:4201
- should display `v1.0.0` with no "SwUpdate logs"
- close the browser tab (important step)
- change version to `v1.0.1` in `app.component.ts`
- open browser at http://localhost:4201
- should display `v1.0.1` with `VERSION_READY` event in "SwUpdate logs"
  -> the app is already at the latest version but still gets a `VERSION_READY` event !
