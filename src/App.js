import React, { PureComponent } from 'react';
import './App.css';

// Styles

// Components
import Preloader from './components/preloader/Preloader';
import TitleManager from './components/titleManager/TitleManager';

class App extends PureComponent {
    state = {
        isLoading: true,
        titles: [],
    };

    render() {
        const { isLoading, titles } = this.state;

        return (
            <div className="App-wrapper">
                <div className="App">
                    <header className="App-header">
                        <img
                            src="http://logo-load.com/uploads/posts/2016-04/1459697016_turner-logo.png"
                            className="App-logo"
                            alt="logo" />
                        <h1 className="App-title">Title Manager</h1>
                    </header>
                    <section className="App-body">
                        { isLoading ?
                            <Preloader /> :
                            <TitleManager titles={ titles } />
                        }
                    </section>
                    <footer className="app-footer" />
                </div>
            </div>
        );
    }

    async componentDidMount() {
        try {
            const response = await fetch('/turner');

            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const json = await response.json();

                this.setState({ isLoading: false, titles: json }); // eslint-disable-line
            }
        } catch (error) {
            console.log(error);
        }
    }

    callApi = async() => {
        const response = await fetch('/turner');
        const body = await response.json()
            .then((result) => {
                return result;
            }).then(titles => {
                return titles;
            });

        if (response.status !== 200) {
            throw Error(body.message);
        }

        // const data = body

        return body;
    };
}

export default App;
