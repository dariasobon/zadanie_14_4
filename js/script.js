var movies = [{
        id: 1,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        length: 'Time: 2h 58min',
        desc: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        imgSrc: 'images/LordOfTheRing.jpg',
        video: 'https://www.youtube.com/watch?v=V75dMMIW2B4'

    },
    {
        id: 2,
        title: 'Sully',
        length: 'Time: 1h 36min',
        desc: 'The story of Chesley Sullenberger, an American pilot who became a hero after landing his damaged plane on the Hudson River in order to save the  passengers and crew.',
        imgSrc: 'images/Sully.jpg',
        video: 'https://www.youtube.com/watch?v=mjKEXxO2KNE'
    },
    {
        id: 3,
        title: "harry potter and the philosopher's stone poster",
        length: 'Time: 2h 32min',
        desc: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
        imgSrc: 'images/harryPotter.jpg',
        video: 'https://www.youtube.com/watch?v=VyHV0BRtdxo'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (React.createElement('h2', {}, this.props.title));
    }
});


var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', { className: 'rightCard_desc' },
                React.createElement('p', {}, this.props.desc)
            )
        );
    }
});


var MovieButton = React.createClass({
    propTypes: {
        link: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', { className: 'rightCard_button' },
                React.createElement('a', { href: this.props.video, target: '_blank' }, 'Watch triler')
            )
        );
    }
});


var LeftCard = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', { className: 'leftCard' },
                React.createElement('img', { src: this.props.image })
            )
        );
    }
});

var RightCard = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', { className: 'rightCard' },
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDescription, { desc: this.props.movie.desc }),
                React.createElement(MovieButton, { link: this.props.movie.video })
            )
        );
    }
});


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', { className: 'card' },
                React.createElement(LeftCard, { image: this.props.movie.imgSrc }, ''),
                React.createElement(RightCard, { movie: this.props.movie }, '')
            )
        );
    }
});

var Cards = movies.map(function(movie) {
    return React.createElement(Movie, { key: movie.id, movie: movie });
});

var element = React.createElement('section', {},
    React.createElement('div', { className: 'container' },
        React.createElement('h1', {}, 'My favorite Films:'), Cards)
);

ReactDOM.render(element, document.getElementById('app'));