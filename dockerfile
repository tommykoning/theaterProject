FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

RUN curl --silent --location https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install --yes nodejs

WORKDIR /src
COPY . .

RUN dotnet restore "./theaterProject.csproj"

RUN dotnet publish "theaterProject.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/sdk:6.0-bullseye-slim

EXPOSE 5000

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "theaterProject.dll"]