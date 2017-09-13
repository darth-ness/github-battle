import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(language) {
    this.setState({
      selectedLanguage: language
    })
  }

  render() {
    const languages = 
      ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
      
    return (
      <ul className="languages">
        {languages.map(language => 
          <li 
            style={language === this.state.selectedLanguage ? 
            { color: '#d0021b'} : null}
            key={language} 
            onClick={this.updateLanguage.bind(null, language)}>
            {language}
          </li>
        )}
      </ul>
    )
  }
}

export default Popular;