import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styles from '../styles/components/GameBox.module.css'

export function GameBox() {
	const { select1, select2, select3, 
					select4, select5, select6, 
					select7, select8, select9, 
					activeX1, activeX2, activeX3, 
					activeX4, activeX5, activeX6, 
					activeX7, activeX8, activeX9,
					activeO1, activeO2, activeO3,
					activeO4, activeO5, activeO6,
					activeO7, activeO8, activeO9,  } = useContext(GameContext)

	return(
		<div className={styles.container}>
			<section>
				<span>
					 { activeX1===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
						 activeO1===1 ? (
							<div> 
							 o
							</div>
						) : (
							<div>
								<button onClick={select1}></button>
							</div>
						)	 	
					 )}
					
					{ activeX2===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO2===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select2}></button>
							</div>
						 )
					  )}

					{ activeX3===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO3===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select3}></button>
							</div>
						 )
					 )}
				</span>
				<span>
				{ activeX4===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO4===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select4}></button>
							</div>
						)
					 )}
					{ activeX5===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO5===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select5}></button>
							</div>
						 )
					 )}
					{ activeX6===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO6===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select6}></button>
							</div>
						 )
					 )}
				</span>
				<span>
				{ activeX7===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO7===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select7}></button>
							</div>
						 )
					 )}
					{ activeX8===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO8===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select8}></button>
							</div>
						 )
					 )}
					{ activeX9===1 ?  
					 	(<div> 
							 x 
							</div>
						) : (
							activeO9===1 ? (
							 <div> 
								o
							 </div>
						 ) : (
						 	<div>
								<button onClick={select9}></button>
							</div>
						 )
					 )}
				</span>
			</section>
		</div>
	)
}