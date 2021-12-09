import Component from '@glimmer/component';

export default class Day1Component extends Component {
  input = 'sdf';

  get floor() {
    let floor = 0;

    [...this.input].forEach((char) => {
      if (char === '(') floor++;
      else floor--;
    });

    return floor;
  }
}
