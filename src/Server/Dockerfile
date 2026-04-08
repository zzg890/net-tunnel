FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy csproj and restore
COPY src/Server/Server.csproj ./src/Server/
COPY src/Shared/Shared.csproj ./src/Shared/
RUN dotnet restore src/Server/Server.csproj

# copy everything and build
COPY . .
RUN dotnet publish src/Server/Server.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "Server.dll"]
