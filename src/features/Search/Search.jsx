import { Component } from 'react';
import { Select } from 'grommet';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch(
          'https://project-diyor-api.herokuapp.com/topics'
        );
        const options = await response.json();
        const topics = options.map((option) => option.topic);
        this.setState({ options: topics });
      } catch (err) {
        throw err;
      }
    })();
  }

  render() {
    return (
      <Select
        options={this.state.options}
        placeholder="click to search for topic"
        searchPlaceholder="type collection"
        onSearch={() => console.log(2)}
      />
    );
  }
}
