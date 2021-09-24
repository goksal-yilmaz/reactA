import React from 'react';
import './App.css';
import { Close, SolidArrow, PartlySlected, Folder, ArrowSolid, Selected, Image, PlusButton, CloseButton, NonSelected, Arrow } from './constants/icon';

function App() {
	return (
		<div className="App">
			<div className="upp">
				{/* ///////// */}
				<div className="topMenu">
					<div className="menuHeader">
						<h4>Klasör Yükle</h4>
					</div>
					<div className="closeIcon">
						<Close/>
					</div>
				</div>
				{/* ///////// */}
				<div className="fileHeader">
					<div className="files">
						<h4>Dosyalar</h4>
					</div>
				</div>
				<div className="ticket">
					<h4>Etiketler</h4>
				</div>
				{/* ///////// */}
				<div className="fileArea">
					<div className="file">
						<div><SolidArrow/><PartlySlected/><Folder/></div>
						<p className="sFolder">Sample_Folder1</p>
					</div>
				</div>	
				<div className="tickets">
					<p>Yer: Ankara</p>				
				</div>
				{/* ///////// */}
				<div className="sampleF">
					<div className="fileS">
						<div><ArrowSolid/><Selected/><Folder/></div>
						<p className="folder">Sample_Folder</p>
					</div>
				</div>
				<div className="sText">
					<p className="ank">Yer: Ankara;</p>
					<p>Kişi: Bu uzuuuuuuuuuuuuuuu...</p>
				</div>
          
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><Selected/><Image/></div>
						<p className="folder">Sample_Image</p>
					</div>
				</div>
				<div className="sImgText">
					<div className="aaa">
						<p className="ImgP">Yer: Ankara <span className="closeB"><CloseButton/></span></p>
					</div>
					<div className="plus"><PlusButton/></div>
				</div>
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><NonSelected/><Image/></div>
						<p className="folder">Uzuuuuuuuuuuuuuuuuuu...</p>
					</div>
				</div>
				<div className="empty"></div>
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><Selected/><Image/></div>
						<p className="folder">Sample_Image2</p>
					</div>
				</div>
				{/* ///////// */}
				<div className="ImgTicket">
					<div className="ImgIcon"><Arrow/></div>
					<div className="ImgText">
						<p className="p1">Yer: Ankara;</p>
						<p className="p2">Yer: Orman;Yer: Orman;</p>
						<p className="p3">Yer: Orman;</p>
						<p className="p4">Yer: Orman;</p>
						<p className="p5">Yer: Orman;</p>
						<p>Yer: Orman;</p>
					</div>
				</div>
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><NonSelected/><Image/></div>
						<p className="folder">Sample_Image3</p>
					</div>
				</div>
				<div className="empty"></div>
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><NonSelected/><Image/></div>
						<p className="folder">Sample_Image5</p>
					</div>
				</div>
				<div className="empty"></div>
				{/* ///////// */}
				<div className="sImgIcon">
					<div className="fileI">
						<div><NonSelected/><Image/></div>
						<p className="folder">Sample_Image6</p>
					</div>
				</div>
				<div className="empty"></div>
				{/* ///////// */}
		  		<div className="last">
		  		<div className="download">
		  		<p>YÜKLE</p>
		  		</div>
		  		</div>
			</div>
		</div>
	);
}

export default App;
