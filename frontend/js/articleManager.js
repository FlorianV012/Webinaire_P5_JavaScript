/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

class ArticleManager{
    constructor(listArticle){
        this.listArticle = listArticle;
    }

    scrollTo(){
        return this.listArticle.sort((a,b) => {
            return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate))? 1 : -1;
        });
    }
}