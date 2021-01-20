function solveClasses(input) {
    let text = '';

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            text += `Title: ${this.title}\nContent: ${this.content}\n`;
            return text.trim();
        }

    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content, originalResearch);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content)
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if (this.clients.length == 0) {
                this.clients.push({ clientName, orderDescription });
                return `${clientName} has ordered a review for ${orderDescription}`;
            }

            this.clients.forEach(book => {
                if ((book.clientName == clientName && book.orderDescription == orderDescription)) {
                    throw new Error('This client has already ordered this review.');
                }
            })
            this.clients.push( {clientName, orderDescription} );
            return `${clientName} has ordered a review for ${orderDescription}`;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = solveClasses();

let lorem = new classes.Article("Lorem",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
// Title: Lorem
// Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel
// ----------------------


let short = new classes.ShortReports("SpaceX and Javascript",
    "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", {
        title: "Dragon 2",
        author: "wikipedia.org"
    });

console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
// The comment is added.
// Title: SpaceX and Javascript
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
// Original Research: Dragon 2 by wikipedia.org
// Comments:
// Thank god they didn't use java.
// In the end JavaScript's features are executed in C++ — the underlying language.
// ----------------------


let book = new classes.BookReview("The Great Gatsby is so much more than a love story",
    "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", {
        name: "The Great Gatsby",
        author: "F Scott Fitzgerald"
    });

console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());


// The Guardian has ordered a review for The Great Gatsby
// Goodreads has ordered a review for The Great Gatsby
// Title: The Great Gatsby is so much more than a love story
// Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
// Book: The Great Gatsby
// Orders:
// The Guardian - 100 symbols
// Goodreads - 30 symbols
