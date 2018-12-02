const ImageCounter = (props) => {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={'img/' + props.imageUrl} onClick={props.onCount} />
        </div>
    );
};

var Hero = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
    },

    render: function() {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.heroes.map((hero) => {
                    return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />
                })}
            </div>
        );
    }
});

var data = [
    {
        id: 1,
        title: 'React',
        subtitle: 'A JavaScript library for building user interfaces',
        imageUrl: 'react.png'
    },
    {
        id: 2,
        title: 'Angular',
        subtitle: 'One framework. Mobile & Desktop',
        imageUrl: 'angular.png'
    },
    {
        id: 3,
        title: 'Ember',
        subtitle: 'A framework for ambitious web developers',
        imageUrl: 'ember.png'
    },
    {
        id: 4,
        title: 'Vue',
        subtitle: 'The Progressive JavaScript Framework',
        imageUrl: 'vue.png'
    }
];

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));