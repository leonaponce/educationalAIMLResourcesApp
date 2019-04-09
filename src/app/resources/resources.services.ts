import { EventEmitter } from '@angular/core';

import { Resource } from './resource.model';

export class ResourceService {
    resourceSelected = new EventEmitter<Resource>();
  
    private resources: Resource[] = [
        new Resource("Kaggle Python Mini-Course", "Delve into Data Science's most important language", "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F05%2FPython-Logo-PNG-Image.png&imgrefurl=http%3A%2F%2Fwww.pngall.com%2Fpython-logo-png&docid=WPCvNLNJeU88wM&tbnid=_3Pyk8wT2qcaVM%3A&vet=10ahUKEwjC2-LrhsLhAhVFnlkKHetMDRMQMwhPKAEwAQ..i&w=360&h=180&bih=390&biw=1800&q=python%20logo&ved=0ahUKEwjC2-LrhsLhAhVFnlkKHetMDRMQMwhPKAEwAQ&iact=mrc&uact=8"),
        new Resource("Kaggle Machine Learning Mini-Course", "Explore Data Science's hottest field", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tftus.com%2Fimg%2Fmachine-learning-1.png&imgrefurl=https%3A%2F%2Fwww.tftus.com%2Fmachine-learning.php&docid=CHvjSsTD_XTThM&tbnid=Wes5ZvY0FVaC7M%3A&vet=10ahUKEwj2yfL-hsLhAhUhwFkKHRapAcsQMwhuKBAwEA..i&w=600&h=428&bih=390&biw=1800&q=machine%20learning%20logo&ved=0ahUKEwj2yfL-hsLhAhUhwFkKHRapAcsQMwhuKBAwEA&iact=mrc&uact=8"),
        new Resource("Kaggle Deep Learning Mini-Course", "Impress yourself with your new Tensorflow skills", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff0%2Fdb%2Ff5%2Ff0dbf54f437965521e9aa5d6da2cf6c6.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F761178774498179725%2F&docid=D2Hql9jdfvZC3M&tbnid=OQqgQaqPcxlB3M%3A&vet=10ahUKEwje4eiMh8LhAhUPtlkKHYKqDXUQMwhXKAEwAQ..i&w=2000&h=1239&bih=390&biw=1800&q=deep%20learning%20logo&ved=0ahUKEwje4eiMh8LhAhUPtlkKHYKqDXUQMwhXKAEwAQ&iact=mrc&uact=8")
      ];


      getResources() {
        return this.resources.slice();
      }
    
}

]