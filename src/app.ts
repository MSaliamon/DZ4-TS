interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
}
function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}


interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    year: number;
    copies: number;
    pages: number;  // Changed to non-optional
}

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: 'Category.CSS',
    year: 2015,
    copies: 3,
    pages: 0  // Provided a default value
}
printBook(myBook);

interface Book2 {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    year: number;
    copies: number;
    pages?: number; 
}

function getAllBooks(): Book2[] {
    
    return []; 
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    pages: number;
}

let myBook2: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: 'Category.CSS',
    pages: 200,
    year: 2015,
    copies: 3
};

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    pages: number;
    markDamaged?: (reason: string) => void;
}

let myBook3: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: 'Category.CSS',
    pages: 200,
    markDamaged: function(reason: string) {
        console.log(`Damaged: ${reason}`);
    },
    year: 2015,
    copies: 3
};

if (myBook3?.markDamaged) {
    myBook3.markDamaged('missing back cover');
}

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    year: number;
    copies: number;
    pages: number;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}