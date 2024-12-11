# Music Library Application

## Installation
1. Clone both the `JAVA-2024` and `ANGULAR-2024` repositories into separate folders.
2. For the `JAVA-2024` backend:
   - Open the project in your Java IDE (e.g., IntelliJ IDEA).
   - Navigate to `MusicLibraryApplication.java`.
   - Run the application by clicking the green triangle in the IDE.
   - Accessable on: [http://localhost:8080/swagger-ui/index.html#/](http://localhost:8080/swagger-ui/index.html#/).
3. For the `ANGULAR-2024` frontend:
   - Open and navigate to the project folder.
   - Start the frontend development server using `ng serve`.
   - Open [http://localhost:4200/](http://localhost:4200/) in your browser to access the application.


## Main Components of the Project

### Home
- **Purpose**: Welcome page of the Music Library Application.
- **Features**:
  - Background image.
  - Provides a friendly introduction to the application.

### Artist
- **Files**: HTML, CSS, TS.
- **Service**: GET request.
- **Displayed Data**:
  - Artist ID.
  - Artist Name.

### Song
- **Files**: HTML, CSS, TS.
- **Service**: GET request.
- **Displayed Data**:
  - Song ID.
  - Title.
  - Duration.
  - Album.
  - Artist.
  - Genre.

### Album
- **Files**: HTML, CSS, TS.
- **Service**: GET request.
- **Displayed Data**:
  - Album ID.
  - Title.
  - Release Date.
  - Artist.
  - Genre.

### Genre
- **Files**: HTML, CSS, TS.
- **Service**: GET request.
- **Displayed Data**:
  - Genre ID.
  - Genre Name.

### Form
- **Files**: HTML, CSS, TS.
- **Purpose**: Manage Artist data.
- **Features**:
  - Remove an Artist by ID using the implemented service.

---
