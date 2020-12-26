
class Lexer {
  constructor () {

    this.pos = 0;
    this.buf = null;
    this.buflen = 0;

    this.logicalSymbolsSingle = {
      '~' : 'NOT',
      '&' : 'AND',
      '|' : 'OR',
      '(' : 'L_PAREN',
      ')' : 'R_PAREN',
    }

    this.logicalSymbolsDouble = {
      '->' : 'CONDITIONAL',
      '==' : 'BICONDITIONAL',
    }

  }

  input (buf) {
    this.pos = 0;
    this.buf = buf;
    this.buflen = buf.length;
  }

  token() { 
    //first check that there are still characters left
    if (this.pos > buflen) {
      return null;
    }

    let c = this.buf[this.pos];
    let sym = this.logicalSymbolsSingle[c];
    let cPlus = this.buf.slice(this.pos, this.pos+2);
    let symPlus = this.logicalSymbolsDouble[c];
    if (sym !== undefined) {
      this.pos ++;
      return {
        name: sym,
        value: c,
        pos: this.pos
        }
      }
    else if (symPlus !== defined) {
      this.pos += 2;
      return {
        name: sym,
        value: cPlus,
        pos: this.pos
        }
      }
    //not a logical symbol
    else {
      //getEndPos defined below
      let endPos = this.getEndPos(startPos);
      return {
        name:'PROPOSITION',
        value: this.buff.slice[startPos, endPos+1],
        pos: endPos +1
      }
    };
  }

  getEndPos (startPos) {
    let logicalSyms = ['~', '&', '|', '(', ')', '-', '='];
    let endPos = startPos +1;
    while(endPos < this.buflen) {
      let c = this.buff[endPos];
      if (logicalSyms.includes(c)) {
        if ((c === '-' && this.buff[endPos+1] !== '>') || (c === '=' && this.buff[endPos+1] !== '=')) {
          endPos++;
        }
        return endPos;
      }
      else {
        endPos++;
      }

    }
    return endPos;
  }

  tokenAll (str) {
    tokenArr = [];
    this.input(str);
    while (this.pos > this.buflen) {
      tokenArr.push(this.token());
    }

  }


}