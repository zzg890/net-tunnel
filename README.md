# net-tunnel — scaffold

Scaffold for a cross-platform self-hosted app using ASP.NET Core (SignalR, EF Core + SQLite) and Angular client.

Quick start (requires `dotnet` and `npm`/`node`):

1. Build & run server:

```powershell
dotnet restore
dotnet build
dotnet run --project src/Server
```

2. Client: generate a full Angular app or use the provided skeleton in `src/Client`.

3. Run tests:

```powershell
dotnet test
```

Notes:
- The server uses SQLite by default (`Data Source=app.db`).
- JWT secret is configured via `Jwt:Key` configuration; change for production.
- The client skeleton is minimal — run `npx @angular/cli new` inside `src/Client` to produce a full Angular app and then integrate SignalR client.
