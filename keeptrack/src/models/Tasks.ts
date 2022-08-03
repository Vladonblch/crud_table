



export class ITask{
    taskName: string='';
    id: number | undefined;
    goals: string='';
    difficulties: string='';
    resources: string='';
    imageUrl: string='';
    isActive: boolean=false;


constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.taskName) this.taskName = initializer.taskName;
    if (initializer.goals) this.goals = initializer.goals;
    if (initializer.resources) this.resources = initializer.resources;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.difficulties)
      this.difficulties = initializer.difficulties;
    // if (initializer.resources)
    //   this.contractSignedOn = new Date(initializer.contractSignedOn);
    //if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }

}
