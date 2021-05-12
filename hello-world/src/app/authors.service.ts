
export class AuthorsService {
  getAuthors() {
    return ["Author1", "Author2", "Author3"]
  }

  getAuthorNum() {
    return this.getAuthors().length
  }
}
