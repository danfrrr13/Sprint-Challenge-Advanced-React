import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Player from './Player';

const PlayerList = props => {

    const [data, setData] = useLocalStorage('data', {});
    useEffect(() => {
        setData(props.data);
    }, [props.data])

    return (
        <div className='playerList'>
            {data.map(player => <Player player={player}>{player.name}</Player>)}
        </div>
    )
}

export default PlayerList;