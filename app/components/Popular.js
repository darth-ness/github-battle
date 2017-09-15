import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
  const languages =
    ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(language =>
        <li
          style={language === props.selectedLanguage ?
            { color: '#d0021b' } : null}
          key={language}
          onClick={props.updateLanguage.bind(null, language)}>
          {language}
        </li>
      )}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(language) {
    this.setState({
      selectedLanguage: language
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage}
        updateLanguage={this.updateLanguage}
        />      
      </div>
    );
  }
}

export default Popular;