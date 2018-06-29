class Connect4 {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 7;
        this.selector = selector;
        this.createGrid();
    }

    createGrid() {
        const $board = $(this.selector);
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>').addClass('row');
            for (let cols = 0; cols < this.COLS; cols++) {
                const $col = $('<div>').addClass('col empty');
                $row.append($col);
            }
            $board.append($row);
        }
    }
}